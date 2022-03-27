import styled from "styled-components";

export const RenderSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: ${({preRender}) => preRender};
  background: ${props => props.theme.background_header};
  overflow-x: hidden;
  position: absolute;
  top: 3.5vw;
  right: 6.5vw;
  z-index: 1;
  transition : .1s;
  
  ::-webkit-scrollbar {
    width: 0;
  }
`

export const SearchItems = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: content-box;
  padding : .1vw 1vw ;
  transition : .1s;
  :hover
  {
    background: #6c6c6c;
  }
  img
  {
    width: 3vw;
    padding: .5vw 0 ;
  }
  section
  {
    width: 11vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    white-space: break-spaces;
    color: ${props => props.theme.color_header_sync_search};
    padding: .5vw 1vw ;
    transition: .1s;
  }
`
export const HeaderSearchSpinner = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SyncSearchNotFound = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color_search_component};
`