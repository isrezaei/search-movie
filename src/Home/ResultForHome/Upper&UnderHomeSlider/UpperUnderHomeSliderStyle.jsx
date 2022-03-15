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
`
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
`

export const UnderSliderScrollToBtn = styled(Latest)`
  width: 10vw;
  background-color: ${props => props.theme.color_upper_slider_left_btn};
  color: ${props => props.theme.color_upper_slider_left_btn_innerText};
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


