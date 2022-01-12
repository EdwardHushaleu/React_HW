import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApiRequest } from '../ApiRequest/ApiRequest';
import { Counter } from "../Counter/Counter";
import {Nav} from "../Nav/Nav";
import {ViewApi} from "../ViewApi/ViewApi";

export const Wrapper = () => {

    return (
        <div>
            <Nav />
            <Routes>
                <Route path="counter" element={<Counter />} />
                <Route path="api" element={<ApiRequest />} />
            </Routes>
        </div>

    )
}

