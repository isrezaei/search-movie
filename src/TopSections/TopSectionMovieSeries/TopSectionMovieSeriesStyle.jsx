import styled from "styled-components";

export const TextSearchStyle = styled.div`
  width: 85%;
  height: 6vw;
  margin: 3vw auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    height: 8vw;
    width: 80%;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 90%;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    height: 14vw;
    align-items: center;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    height: 18vw;
  }
`

export const TextSearch = styled.div`
  font-size: 1.9vw;
  font-weight: bold;
  color: ${props => props.theme.color_top_section_search_result_text};
  transition: .1s;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 2.5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 3vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 4vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 6vw;
  }
    
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
    
    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      font-size: 1.3vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      font-size: 1.4vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      display: none;
    }
  }

  hr {
    width: 85%;
    border: .2px solid ${props => props.theme.color_top_section_search_result_hr_line};
    transition: .1s;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      width: 75%;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      width: 70%;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      display: none;
    }
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

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      width: 7.5vw;
      height: 2vw;
      font-size: 1.3vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      width: 8.5vw;
      height: 2.8vw;
      font-size: 1.5vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      width: 20vw;
      height: 4vw;
      font-size: 2.3vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 35vw;
      height: 6.5vw;
      font-size: 3.5vw;
      border-radius: 5vw;
    }
      
  }

`