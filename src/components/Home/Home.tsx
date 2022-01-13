import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from '../hook/useAuth';

export const Home = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <Link to='/api'>Add IP Users</Link>
            <button onClick={() => signout(() => navigate('/', {replace: true}))}>Log Out</button>
        </div>
    )
} 

