import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApiRequest } from '../../Api/ApiRequest/ApiRequest';
import { Counter } from "../Counter/Counter";
import {Nav} from "../Nav/Nav";
import {Login} from "../Login/Login";
import {RequireAuth} from '../hoc/RequireAuth'

export const Wrapper = () => {

    return (
        <div>
            <Routes>
                <Route path='' element={<Nav/>}/>
                <Route path="counter" element={<Counter />} />
                <Route path="api" element={<ApiRequest />} />
                <Route path="login" element={<Login />} />
            </Routes>
        </div>

    )
}

