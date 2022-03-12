import styled from "styled-components";

export const HeaderMasterStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4vw;
  background-color:#1b2634;
  margin: auto;
`
export const Logo = styled.div`
  margin-left: 2vw;
  font-weight: bolder;
  font-size: 1.5vw;
  cursor: pointer;
  color: white;
`
export const Search = styled.div`
  margin-right: 2vw;
  width: 20%;
  height: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rebeccapurple;
`
export const ReadyToSearch = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  span
  {
    font-size: 1vw;
    color: lightseagreen;
    cursor: pointer;
  }
  input
  {
    border: none;
    outline: none;
    background: transparent;
    color: #8f8f8f;
  }
`
export const RenderSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: 20vw;
  background: red;
  overflow-x: hidden;
  position: absolute;
  top: 3vw;
  z-index: 1;
  ::-webkit-scrollbar
  {
    width: 0;
  }
`