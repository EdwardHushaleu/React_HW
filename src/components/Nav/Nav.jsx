import React from 'react';
import { Link } from "react-router-dom";
const Nav = (props) => {

    return (
        <div>
            <Link to = "/counter">Counter</Link>
            <br/>
            <Link to = "/api">Api</Link>
        </div>
    )
}

export default Nav