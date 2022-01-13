import { useContext } from "react";
import { AuthContext } from "../hoc/AurhProvider";

export function useAuth() {
    return useContext(AuthContext);
}