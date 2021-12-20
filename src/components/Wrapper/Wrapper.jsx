import React from 'react';
import {  Route, Routes} from "react-router-dom";
import Counter from "../Counter/Counter";
import Nav from "../Nav/Nav";
import Api from "../Api/Api";

 const Wrapper = () => {

    return (
        <div>
            <Nav/>
            <Routes>
                <Route path="counter" element={<Counter/>}/>
                <Route path="api" element={<Api/>}/>
            </Routes>
        </div>

    )
}
 export default Wrapper
