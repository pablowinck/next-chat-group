import { createContext, useContext, useState } from 'react';

export type User = {
    id: number;
    name: string;
    email: string;
    profileImage: string;
    createdAt: Date;
};

type UserContextType = {
    logged: boolean;
    setLogged: (value: boolean) => void;
};

const UserContext = createContext({} as UserContextType);

const UserContextProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState(false);

    const value: UserContextType = {
        logged: logged,
        setLogged: setLogged
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error(
            'useUserContext must be used within a UserContextProvider'
        );
    }
    return context;
};

export default UserContextProvider;
