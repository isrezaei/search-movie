import styled from "styled-components";




export const TextSearchStyle = styled.div`
  width: 85%;
  height: 6vw;
  margin: 3vw auto;
  background-color: #2d2d3b;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

`

export const TextSearch = styled.div`

  font-size: 1.9vw;
  font-weight: bold;
  color: #bdbcbc;


`


export const TypeSearch = styled.div `

  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: #7a7a7a;
    font-weight: bold;
    font-size: .85vw;
  }

  hr {
    width: 85%;
    border: .2px solid #626060;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 1.5vw;
    background: #20e28c;
    border-radius: 3vw;
    font-size: .85vw;
    font-weight: bold;
  }

`