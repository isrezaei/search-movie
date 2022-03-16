import styled from "styled-components";

export const TextSearchStyle = styled.div`
  width: 85%;
  height: 6vw;
  margin: 3vw auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`

export const TextSearch = styled.div`
  font-size: 1.9vw;
  font-weight: bold;
  color: ${props => props.theme.color_top_section_search_result_text};
  transition: .1s;
`

export const TypeSearch = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    color: ${props => props.theme.color_top_section_search_result_your_search_text};;
    font-weight: bold;
    font-size: .85vw;
    transition: .1s;
  }

  hr {
    width: 85%;
    border: .2px solid ${props => props.theme.color_top_section_search_result_hr_line};
    transition: .1s;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6vw;
    height: 1.5vw;
    background:${props => props.theme.color_top_section_search_result_type};
    color: ${props => props.theme.color_top_section_search_result_type_innerText};;
    border-radius: 3vw;
    font-size: .85vw;
    font-weight: bold;
    transition: .1s;
  }

`