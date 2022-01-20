// Этот компонент провайдер для Авторизации
import React, { createContext, useState } from "react";

export const AuthContext = createContext(null as any );

interface AuthProviderProps {
    children: any;
}

const AuthProvider: React.FunctionComponent = ({ children }) => {
    const [user, setUser] = useState<string>('');

    const signin = (newUser: string, cb:()=>void) => {

        setUser(newUser);
        cb();/* функция navigate что бы сделать переадресацию после работы с пользователем*/
    }
    const signout = (cb: any) => {
        setUser('');
        cb();/*функция navigate что бы сделать переадресацию после работы с пользователем*/
    }

    const value = {user, signin, signout}
    
    return (
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>

    );
}

export { AuthProvider };