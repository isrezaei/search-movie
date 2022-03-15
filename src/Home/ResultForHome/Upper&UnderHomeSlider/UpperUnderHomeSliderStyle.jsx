import styled from "styled-components";

export const Upper = styled.div`
  width: 85%;
  height: 5vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: #9ca0ab;
    font-size: .95vw;
  }

  hr {
    width: 65%;
    border: 1px solid #424242;
  }
`
export const Latest = styled.div`
  width: 6.5vw;
  height: 1.5vw;
  background-color: #20e28c;
  color: #212121;
  margin: 0 .3vw;
  border-radius: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .75vw;
  font-weight: bolder;
  cursor : default;
`

export const UnderSliderScrollToBtn = styled(Latest)`
  width: 10vw;
  background-color: #525763;
  color: #9ca0ab;
  cursor: pointer;
`

export const Under = styled(Upper)``

export const UnderSliderSection = styled.div`
  position: absolute;
  left: 7.5vw;
  font-size: 3vw;
  font-weight: bolder;
  color: #9ca0ab;
`


