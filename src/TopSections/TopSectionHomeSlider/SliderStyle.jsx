import styled from "styled-components";

export const ParentSlider = styled.div`
  width: 95%;
  height: 40vw;
  margin: 2vw auto;
  
  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    height: 40vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 100%;
    height: 38vw;
    .slider-right, 
    .slider-left{
      display: none !important;
    }
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: none;
  }
  //380px
  //no need
`
export const DivMobileSlider = styled.div`
  display: none;
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 75%;
    height: auto;
    display: block ;
    margin: auto;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 60%;
  }
  //no need
`
export const SliderImage = styled.img`
  width: 100vw;
  filter: brightness(80%);

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 110vw;
    filter: brightness(65%);
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 100%;
    height: auto;
  }
`
export const SliderPosterName = styled.p`
  font-family: 'Secular One', sans-serif;
  position: absolute;
  top: 29.5vw;
  left: 1.2vw;
  font-size: 2vw;
  color: snow;

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    top: 30.5vw;
    left: 1.2vw;
    font-size: 3vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    top: 100vw;
    left: 3.5vw;
    font-size: 5vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    top: 65.5vw;
    left: 3.5vw;
    font-size: 3.5vw;
  }
`

export const SliderYellowRate =styled.b`
  color: yellow;
  font-size: 1.8vw;
  font-weight: bolder;

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 3vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 6vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 5vw;
  }
`

export const SliderImdbRate = styled.p`
  font-family: 'Comfortaa', cursive;
  position: absolute;
  top : 24.5vw;
  left: 1.2vw;
  font-size: 1.2vw;
  font-weight: lighter;
  color: whitesmoke;

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    top : 23vw;
    left: 1.2vw;
    font-size: 2vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    top : 81.5vw;
    left: 3.5vw;
    font-size: 4.5vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    top : 52.5vw;
    left: 3.5vw;
    font-size: 3vw;
  }
`
export const SliderImdbLogo = styled.img`
  position: absolute;
  width: 4vw;
  top : 26.9vw;
  left: 1.2vw;
  border-radius: 2vw;
  
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 6vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 15vw;
    top : 90vw;
    left: 3.5vw;
    border-radius: 56vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 10vw;
    top : 59vw;
    left: 3.5vw;
    border-radius: 2vw;
  }
`