import React from 'react';

type VerticalPosition = 'top' | 'bottom';
type HorizontalPosition = 'left' | 'center' | 'right';
type ToastType = 'blank' | 'success' | 'error';

export type Position = `${VerticalPosition}-${HorizontalPosition}`;

export type Toast = {
   id: string;
   type: ToastType;
   message: string;
   open: boolean;
   duration?: number;
};

export type Store = {
   count: number;
   toasts: Array<Toast>;
   close: (toastId: string) => void;
   success: (message: string, options?: ToastOptions) => void;
   error: (message: string, options?: ToastOptions) => void;
   blank: (message: string, options?: ToastOptions) => void;
};

export type ToastOptions = {
   duration?: number;
};

const addToast = (
   type: ToastType,
   message: string,
   prev: Store,
   options: ToastOptions
): Store => ({
   ...prev,
   count: prev.count + 1,
   toasts: [
      {
         id: `toast-${prev.count}`,
         open: true,
         type,
         message,
         duration: 3000,
         ...options
      },
      ...prev.toasts
   ]
});

export const useToastStore = createStore<Store>((set) => ({
   count: 0,
   toasts: [],
   close: (toastId: string) => {
      set((prev) => {
         const newToasts = prev.toasts.map((toast) =>
            toast.id === toastId ? { ...toast, open: false } : toast
         );
         return {
            ...prev,
            toasts: newToasts
         };
      });
   },
   success: (message: string, options?: ToastOptions) => {
      set((prev) => addToast('success', message, prev, options));
   },
   error: (message: string, options?: ToastOptions) => {
      set((prev) => addToast('error', message, prev, options));
   },
   blank: (message: string, options?: ToastOptions) => {
      set((prev) => addToast('blank', message, prev, options));
   }
}));

type State = object;
type UpdaterState<T extends State> = T | ((state: T) => T);
type SetState<T extends State> = (state: UpdaterState<T>) => void;
type StateSelector<T extends State, U> = (state: T) => U;
type StateCreator<T extends State> = (setState: SetState<T>) => T;

function createStore<T extends State>(createState: StateCreator<T>) {
   const listeners = new Set();

   const subscribe = (listener: () => void) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
   };

   const getState = () => state;

   const setState = (nextState: UpdaterState<T>) => {
      if (state !== nextState) {
         state = typeof nextState === 'function' ? nextState(state) : nextState;
         listeners.forEach((listener: () => void) => {
            listener();
         });
      }
   };

   let state = createState(setState);

   const useStore = <U>(callback: StateSelector<T, U> = getState as any) => {
      const selector = useCallbackRef(callback);
      const [state, setState] = React.useState(() => selector(getState()));

      React.useEffect(() => {
         const callback = () => {
            setState(() => selector(getState()));
         };

         const unsubscribe = subscribe(callback);
         callback();

         return () => {
            unsubscribe();
         };
      }, [selector]);

      return state;
   };

   return useStore;
}

const useCallbackRef = <T extends (...args: any[]) => any>(
   callback: T | undefined
): T => {
   const callbackRef = React.useRef(callback);

   React.useEffect(() => {
      callbackRef.current = callback;
   });

   return React.useMemo(
      () => ((...args) => callbackRef.current?.(...args)) as T,
      []
   );
};
