import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./Redux/Store";
import {createGlobalStyle ,ThemeProvider} from "styled-components";


const GlobalStyle =  createGlobalStyle `
  

  html, div, span,
  h1, h2, h3, h4, h5, h6, p,img {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }
  
  body
  {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    background-color : #253240;
  }
`

const Theme = {

}


ReactDOM.render(
      <BrowserRouter>
              <Provider store={store}>
                  <GlobalStyle/>
                  <App />
              </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);


