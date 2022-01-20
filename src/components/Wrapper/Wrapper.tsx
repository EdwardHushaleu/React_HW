import React from 'react';
import { Route, Routes } from "react-router-dom";
import { ApiRequest } from '../../Api/ApiRequest/ApiRequest';
import { Counter } from "../Counter/Counter";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Layout } from '../Layout/layout';
import { RequireAuth } from '../hoc/RequireAuth'
import { AuthProvider } from '../hoc/AuthProvider';

const CommponRout = () => {
    return false ? <Home /> : null ;
}

export const Wrapper: React.FC= () => {

    return (
        <AuthProvider>
            <div>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="counter" element={<Counter />} />
                        <Route path="api" element={
                          <RequireAuth>
                              <ApiRequest/>
                          </RequireAuth>  
                        }/>
                        <Route path="login" element={<Login />} />
                        <Route path="test" element={<CommponRout />} />
                    </Route>
                </Routes>
            </div>
        </AuthProvider>
    )
}

