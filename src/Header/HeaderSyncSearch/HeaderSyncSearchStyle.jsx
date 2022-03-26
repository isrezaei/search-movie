import styled from "styled-components";

export const RenderSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: ${({preRender}) => preRender};
  background: #575757;
  overflow-x: hidden;
  position: absolute;
  top: 3.5vw;
  right: 6.5vw;
  z-index: 1;


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
  padding : .1vw 0 ;
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
    color: #e3e2e2;
    padding: .5vw 0 ;
  }
`

export const HeaderSearchSpinner = styled.div `

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

`
