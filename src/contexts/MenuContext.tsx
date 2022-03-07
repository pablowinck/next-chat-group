import { createContext, FC, useContext, useState } from 'react';

type MenuContextType = {
    open: boolean;
    setOpen: (open: boolean) => void;
};

const MenuContext = createContext({} as MenuContextType);

const MenuContextProvider: FC = ({ children }) => {
    const [open, setOpen] = useState(false);

    const values = {
        open: open,
        setOpen: setOpen
    };
    return (
        <MenuContext.Provider value={values}>{children}</MenuContext.Provider>
    );
};

export const useMenuContext = () => {
    const context = useContext(MenuContext);
    if (!context) {
        throw new Error(
            'useMenuContext must be used within a MenuContextProvider'
        );
    }
    return context;
};

export default MenuContextProvider;
