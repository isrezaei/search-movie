import styled from "styled-components";

export const Upper = styled.div`
  width: 85%;
  height: 5vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${props => props.theme.color_upper_slider_welcome_text};
    font-size: .95vw;
  }
  hr {
    width: 70%;
    border: 1px solid ${props => props.theme.color_upper_slider_hr_line};
    transition: .1s;
  }


  //480px
  @media(max-width:${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      display: none;
    }

    hr {
      display: none;
    }
  }
  
  //320px
  @media(max-width:${props => props.theme.responsive.small_mobile}) {
    width: 100%;
    height: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    h3 {
      display: none;
    }

    hr {
      display: none;
    }
  }
`

export const Under = styled(Upper)``

export const Latest = styled.div`
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



  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 30vw;
    height: 8vw;
    font-size: 3.5vw;
  }
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 45vw;
    height: 8vw;
    font-size: 3.5vw;
  }

`

export const UnderSliderScrollToBtn = styled(Latest)`
  width: 10vw;
  background-color: ${props => props.theme.color_upper_slider_left_btn};
  color: ${props => props.theme.color_upper_slider_left_btn_innerText};
  cursor: pointer;

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: none;
  }
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    display: none;
  }
`

export const UnderSliderSection = styled.div`
  position: absolute;
  left: 7.5vw;
  font-size: 3vw;
  font-weight: bolder;
  color: #9ca0ab;

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vw;
    font-size: 7vw;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    color: ${props => props.theme.color_upper_slider_right_btn};
  }
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vw;
    font-size: 4.5vw;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    
    color: ${props => props.theme.color_upper_slider_right_btn};
  }
`


