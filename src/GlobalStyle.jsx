import {createGlobalStyle} from "styled-components";

export const GlobalStyle =  createGlobalStyle `
  //Reset
  div, span,
  h1, h2, h3, h4, h5, h6, p,img , a {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
    text-decoration: none;
  }
  html
  {
    overflow-x: hidden;
    user-select: none;
  }
  
  *::-webkit-scrollbar {
    width: .8vw;
  }
  *::-webkit-scrollbar-track {
    background: ${props => props.theme.background_project};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.background_scroll};
    border-radius: 5vw;
    border: .3vw solid ${props => props.theme.background_project};
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
