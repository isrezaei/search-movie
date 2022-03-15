import styled from "styled-components";

export const HeaderStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4vw;
  background-color: ${props => props.theme.background_header};
  margin: auto;
  transition: .1s;
`
export const Logo = styled.div`
  margin-left: 2vw;
  font-weight: bolder;
  font-size: 1.5vw;
  cursor: pointer;
  color: ${props => props.theme.color_logo};
`
export const Search = styled.div`
  margin-right: 2vw;
  width: auto;
  height: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ReadyToSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  span
  {
    display: flex;
    font-size: 2vw;
    color: ${props => props.theme.color_search_component};
    cursor: pointer;
    margin-right: .5vw;
  }
  input
  {
    width: 14vw;
    height: 1.5vw;
    border: none;
    outline: none;
    background: transparent;
    color: #8f8f8f;
    font-size: 1vw;
    border-bottom: .5px solid ${props => props.theme.color_search_component};
   
  }
  
  select {
    width: 4vw;
    height: 1.5vw;
    border: none;
    background: ${props => props.theme.color_search_component};
    text-align: center;
    margin-left: 1vw;
    outline: none;
    font-size: .75vw;
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