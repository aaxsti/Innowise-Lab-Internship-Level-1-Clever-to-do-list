import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import App from "./App";
import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
  * {
    box-sizing: content-box;
  }

  body {
    background-color: #eaecf0;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    min-height: 100vh;
  }
`

ReactDOM.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <Global/>
             <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

