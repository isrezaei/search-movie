import styled from "styled-components";

export const GridDisplay = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-template-rows: repeat(2 , 26vw) ;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
`

export const CardParent = styled.div`
  
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: .1s ease-in;
  cursor: pointer;

`
export const CardImage = styled.img`
  width: 16vw;
  height: 23vw;
  margin: .5vw 0;
`

export const CardYear = styled.div`
  width: 60%;
  font-size: .85vw;
  color: #bdbcbc;
`

export const CardTitle = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1vw;
  font-weight: bold;
  color: whitesmoke;
`




