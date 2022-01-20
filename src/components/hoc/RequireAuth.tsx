//hoc компонент высшего порядка
// REquireAuth не что требующее авторизации(использует локацию и редиректы )
import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from '../hook/useAuth';

interface RequireAuthProps {
    children: any;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children /*Любая страница во wrapper*/ }) => {
    const location = useLocation();
    const { user } = useAuth(); // информаця о авторизации

    if (!user) {
        return <Navigate to='/login' state={{ from: location }}/*state-уточнение от куда мы приходим*/ />;
    }

    return children;
}

export { RequireAuth }