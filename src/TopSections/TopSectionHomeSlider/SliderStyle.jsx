import styled from "styled-components";


export const DivMobileSlider = styled.div`

  display: none;

  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 65%;
    display: block ;
    margin: auto;
  }
`



export const ParentSlider = styled.div`
  width: 95%;
  height: 75vh;
  margin: 2vw auto;

  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    display: none;
  }
`
export const SliderImage = styled.img`
  width: 100vw;
  filter: brightness(80%);

  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 200vw;
    height: 60vh;
   
  }
`
export const SliderPosterName = styled.p`
  font-family: 'Secular One', sans-serif;
  position: absolute;
  top: 29.5vw;
  left: 1.2vw;
  font-size: 2vw;
  color: snow;
`
export const SliderImdbRate = styled.p`
  font-family: 'Comfortaa', cursive;
  position: absolute;
  top : 24.5vw;
  left: 1.2vw;
  font-size: 1.2vw;
  font-weight: lighter;
  color: whitesmoke;
`

export const BoldRate =styled.b`
  color: yellow;
  font-size: 1.8vw;
  font-weight: bolder;
`

export const SliderImdbLogo = styled.img`
  width: 4vw;
  position: absolute;
  top : 26.9vw;
  left: 1.2vw;
  border-radius: 2vw;
`
export const SliderAddFavorite = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  color: #cccccc;
  font-size: 2vw;
  position: absolute;
  right: 1vw;
  top: 1vw;
  cursor: pointer;
  transition: .3s;
  &:hover {
    color: pink;
  }

`