import styled from "styled-components";

export const PreloadStyle = styled.div`
  width : 100%;
  display : grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-template-rows: repeat(2 , 26vw) ;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
`
export const Skeletal = styled.div`
  display: flex;
  flex-direction: column;
`