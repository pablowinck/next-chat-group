import React from 'react';
import { AnimatePresence } from 'framer-motion';

import {
   type Toast as TToast,
   type Store,
   type Position,
   type ToastOptions,
   useToastStore
} from './store';

import { toastIcons } from './icons';

import * as S from './style';

type ToasterProps = {
   position?: Position;
};

const Toaster = ({ position = 'bottom-center' }: ToasterProps) => {
   const toasts = useToastStore((state) => state.toasts);

   return (
      <S.Container position={position}>
         {toasts.map((toast) => (
            <Toast key={toast.id} toast={toast} position={position} />
         ))}
      </S.Container>
   );
};

type ToastProps = {
   toast: TToast;
   position: Position;
};

const Toast = ({ toast, position }: ToastProps) => {
   const close = useToastStore((state) => state.close);
   const factor = position.includes('top') ? -1 : 1;

   React.useEffect(() => {
      const timeout = window.setTimeout(() => close(toast.id), toast.duration);

      return () => {
         window.clearTimeout(timeout);
      };
   }, [close, toast.id, toast.duration]);

   return (
      <AnimatePresence>
         {toast.open && (
            <S.Toast
               layout
               initial={{ opacity: 0.5, y: 50 * factor, scale: 0.6 }}
               animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.35, ease: [0.21, 1.02, 0.73, 1] }
               }}
               exit={{
                  opacity: 0,
                  y: 60 * factor,
                  scale: 0.6,
                  transition: { duration: 0.4, ease: [0.06, 0.71, 0.55, 1] }
               }}
            >
               {React.createElement(toastIcons[toast.type])}
               {toast.message}
            </S.Toast>
         )}
      </AnimatePresence>
   );
};

export const useToast = () => {
   const store = useToastStore<Store>();

   const toast = (message: string, options?: ToastOptions) =>
      store.blank(message, options);

   toast.success = store.success;
   toast.error = store.error;

   return toast;
};

export default Toaster;
