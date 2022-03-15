import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import {GlobalStyle} from "./GlobalStyle";




const M =store.getState()

console.log(M.DarkMoodSlice)


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
                <App />,
        </Provider>,
    </BrowserRouter>,

    document.getElementById('root')
);