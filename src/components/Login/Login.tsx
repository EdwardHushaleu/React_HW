import React from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hook/useAuth';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage: string = location.state?.from?.pathname;
    const handleSubmit = (event:React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.target;
        const user: string = form.username.value
        
        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: <input name="username" />
                </label>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export { Login };

//React.SyntheticEvent<HTMLFormElement | HTMLInputTypeAttribute>