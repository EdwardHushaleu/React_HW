import { useContext } from "react";
import { AuthContext } from "../hoc/AuthProvider";

export function useAuth() {
    return useContext(AuthContext);
}

// что бы не пердавать все вернхние import в каждом компоненте 
// мы создаем свой hook который обарачивает эту логику.
// вызов хука useAuth преведет к тому что получим данные  обекта const value = {user, signin, signout} из 
// AuthProvider