import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';
import IAuthContext from '../types/AuthContext';

export const AuthContext = createContext<IAuthContext | null>(null);

export function AuthContextProvider({ children }: { children: React.ReactNode }) {

    const [ user, setUser ] = useLocalStorage<boolean | null>('user', null);
    const navigate = useNavigate();

    const updateAuthStatus = (status: 'loggedIn' | 'loggedOut') => {

        if(status === 'loggedIn') {
            setUser(true);
            navigate('user')
        }

        if(status === 'loggedOut') {
            setUser(false);
            navigate('');
        }
    }

    return (
        <AuthContext.Provider value={{ user, updateAuthStatus }}>
            { children }
        </AuthContext.Provider>
    );
}