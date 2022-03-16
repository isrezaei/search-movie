import styled from "styled-components";

export const ParentSlider = styled.div`
  width: 95%;
  height: 75vh;
  margin: 2vw auto;
`
export const SliderImage = styled.img`
  width: 100vw;
  filter: brightness(80%);
`
export const SliderPosterName = styled.p`
  font-family: 'Secular One', sans-serif;
  position: absolute;
  top: 26.5vw;
  left: 1.2vw;
  font-size: 2vw;
  color: snow;
`
export const SliderImdbRate = styled.p`
  font-family: 'Comfortaa', cursive;
  position: absolute;
  top : 21.5vw;
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
  top : 23.9vw;
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