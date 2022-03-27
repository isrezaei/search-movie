import styled from "styled-components";

export const UpperSection = styled.div`
  width: 85%;
  height: 5vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  h3
  {
    color: ${props => props.theme.color_upper_slider_welcome_text};
    font-size: .95vw;
  }
  hr
  {
    width: 70%;
    border: 1px solid ${props => props.theme.color_upper_slider_hr_line};
    transition: .1s;
  }
  //1024
  @media(max-width:${props => props.theme.responsive.medium_screen}) {
    height: 8.5vw;
    h3 {
      font-size: 1.7vw;
    }
    hr {
      width: 55%;
      border: none;
    }
  }
  //900px
  @media(max-width:${props => props.theme.responsive.small_screen}) {
    height: 10vw;
    h3 {
      font-size: 2.5vw;
    }
    hr {
      width: 60%;
      border: none;
    }
  }
  //480px
  @media(max-width:${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    h3
    {
      display: none;
    }
    hr
    {
      display: none;
    }
  }
  //380px
  //no need
`

export const UnderSection = styled.div`

  width: 85%;
  height: 5vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  //1024
  @media(max-width:${props => props.theme.responsive.medium_screen}) {
    height: 6vw;
  }

  //900px
  @media(max-width:${props => props.theme.responsive.small_screen}) {
    height: 8vw;
  }

  //480px
  @media(max-width:${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
  }

  //380px
  //no need
`

export const ReferenceToLatestMovie = styled.div`
  width: 6.5vw;
  height: 1.8vw;
  background-color: ${props => props.theme.color_upper_slider_right_btn};
  color:  ${props => props.theme.color_upper_slider_right_btn_innerText};
  margin: 0 .3vw;
  border-radius: 5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: .75vw;
  font-weight: bolder;
  cursor: default;
  transition: .1s;
  
  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 15vw;
    height: 2.5vw;
    font-size: 1.3vw;
    margin: 0 .5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 18vw;
    height: 3.5vw;
    font-size: 1.8vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 30vw;
    height: 8vw;
    font-size: 3.5vw;
  }
  //380px
  //no need
`

export const ReferenceToRandomMovie = styled(ReferenceToLatestMovie)`
  width: 10vw;
  background-color: ${props => props.theme.color_upper_slider_left_btn};
  color: ${props => props.theme.color_upper_slider_left_btn_innerText};
  cursor: pointer;
  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    display: none;
  }
  //900px
  //480px
  //380px
  //no need
`

export const UnderSliderSection = styled.div`
  position: absolute;
  left: 7.5vw;
  font-size: 3vw;
  font-weight: bolder;
  color: #9ca0ab;

  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 100%;
    left: 0;
    text-align: center;
    font-size: 2.5vw;
    color: ${props => props.theme.color_upper_slider_right_btn};
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: auto;
    left: 6vw;
    font-size: 2.5vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vw;
    font-size: 5vw;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: ${props => props.theme.color_upper_slider_right_btn};
  }

  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 4.5vw;
  }
`


