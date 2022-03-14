import styled from "styled-components";
import { ScrollTo } from "react-scroll-to";


const Upper = styled.div`
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

const Latest = styled.div`
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
  font-weight: bolder
`

const RandomBtn = styled(Latest)`
  width: 10vw;
  background-color: #525763;
  color: #9ca0ab;
`

const Under = styled(Upper)``


const RandomBox = styled.div`
  position: absolute;
  left: 7.5vw;
  font-size: 3vw;
  font-weight: bolder;
  color: #9ca0ab;
`




export const UpperSlider = () =>
{
    return (
        <Upper>
            <h3>Welcome</h3>
            <hr/>
            <ScrollTo>
                {({ scroll }) => (
                    <RandomBtn onClick={() => scroll({ x: 20, y: 750 , smooth: true})}>Random movies and series</RandomBtn>
                )}
            </ScrollTo>
            <Latest >The Latest Movie</Latest>
        </Upper>
    )
}

export const UnderSlider = () =>
{
    return (
        <Under>
            <RandomBox>Random movies and series</RandomBox>
        </Under>
    )
}