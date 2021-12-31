import { createContext, useContext, useState } from 'react';

type ViewContextType = {
    isOpenAdd: boolean;
    setIsOpenAdd: (value: boolean) => void;
    isOpenJoin: boolean;
    setIsOpenJoin: (value: boolean) => void;
    viewMessages: boolean;
    setViewMessages: (value: boolean) => void;
    viewPassword: boolean;
    setViewPassword: (value: boolean) => void;
};

const ViewContext = createContext({} as ViewContextType);

const ViewContextProvider: React.FC = ({ children }) => {
    const [isOpenAdd, setIsOpenAdd] = useState(false);
    const [isOpenJoin, setIsOpenJoin] = useState(false);
    const [viewMessages, setViewMessages] = useState(true);
    const [viewPassword, setViewPassword] = useState(false);

    const value: ViewContextType = {
        isOpenAdd: isOpenAdd,
        setIsOpenAdd: setIsOpenAdd,
        isOpenJoin: isOpenJoin,
        setIsOpenJoin: setIsOpenJoin,
        viewMessages: viewMessages,
        setViewMessages: setViewMessages,
        viewPassword: viewPassword,
        setViewPassword: setViewPassword
    };

    return (
        <ViewContext.Provider value={value}>{children}</ViewContext.Provider>
    );
};

export const useViewContext = () => {
    const context = useContext(ViewContext);
    if (!context) {
        throw new Error(
            'useViewContext must be used within a ViewContextProvider'
        );
    }
    return context;
};

export default ViewContextProvider;
