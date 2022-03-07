import styled from "styled-components";

export const HeaderMasterStyle = styled.div `
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 4vw;
  background-color: #1a1923;
  margin: auto;
`
export const LeftSide = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 25;
  padding: 0 2vw;
`
export const Logo = styled.div`
  font-weight: bolder;
  font-size: 1.5vw;
  color: white;
`
export const Search = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 1.5vw;
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
export const RightSide = styled.div`
    flex: 1;
`
