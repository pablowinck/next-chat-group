import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

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

const getDefaultUser = (): User => {
    if (typeof window === 'undefined') return;

    const localUser = JSON.parse(
        localStorage.getItem('user') ? localStorage.getItem('user') : '{}'
    );

    if (!localUser) return;

    return localUser;
};

const UserContextProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<User | null>(getDefaultUser());
    const [logged, setLogged] = useState(false);
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem('user')) setLogged(true);
    }, []);

    const handleLogged = (state: boolean) => {
        setLogged(state);
        if (state) return;
        router.push('/');
        setUser(null);
    };

    const value: UserContextType = {
        logged: logged,
        setLogged: handleLogged,
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
