import { createContext, useState } from "react";

export const AuthContext = createContext(null! as any );

interface AuthProviderProps {
    children: any;
}

const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState(null!);

    const signin = (newUser: any, cb : any) : any => {
        setUser(newUser);
        cb();
    }
    const signout = (cb: any) : any => {
        setUser(null!);
        cb();
    }

    const value = {user, signin, signout}
    return (
        <AuthContext.Provider value ={value}>
            {children}
        </AuthContext.Provider>

    );
}

export { AuthProvider };