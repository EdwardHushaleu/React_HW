import React from 'react';
import { Link } from "react-router-dom";


export const Nav = () => {

    return (
        <div>
            <Link to="/counter">Counter</Link>
            <br/>
            <Link to="/api">Api</Link>
        </div>
    )
} 

