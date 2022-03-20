import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle `
  //Reset
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
    background-color : ${props => props.theme.background_project};
    transition: .1s;
    overflow-x: hidden;
  }
`
