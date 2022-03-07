import styled from "styled-components";

export const SearchItems = styled.div`
  width: 100%;
  height: auto;
  background: #252525;
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
