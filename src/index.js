import React from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom';
import {Wrapper} from './components/Wrapper/Wrapper';
import './index.css';


ReactDOM.render(
    <BrowserRouter>
      <Wrapper />
    </BrowserRouter>,
  document.getElementById('root')
);

