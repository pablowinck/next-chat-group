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
    user: User;
    setUser: (value: User) => void;
};

const UserContext = createContext({} as UserContextType);

const UserContextProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState({
        id: 10,
        name: 'Pablo Winter',
        email: 'pablowinck123@gmail.com',
        profileImage: '/images/default-avatar.png',
        createdAt: new Date()
    });

    const value: UserContextType = {
        logged: logged,
        setLogged: setLogged,
        user: user,
        setUser: setUser
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
