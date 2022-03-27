import styled from "styled-components";

export const HeaderStyle = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4vw;
  background-color: ${props => props.theme.background_header};
  margin: auto;
  transition: .1s;
  
  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    height: 7vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    height: 8.5vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 25vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 25vw;
  }
`
export const HeaderLogo = styled.div`
  margin-left: 2vw;
  font-weight: bolder;
  font-size: 1.5vw;
  cursor: pointer;
  color: ${props => props.theme.color_Header_logo};
  transition: .1s;
  
  //1024px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 2.5vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 4vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 7vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 7vw;
  }
`
export const HeaderSearchSection = styled.div`
  
  margin-right: 2vw;
  width: auto;
  height: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 100%;
  }
`
export const HeaderSearchElements = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 95%;
    justify-content: space-around;
    align-items: center;
  }
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 95%;
    justify-content: space-around;
    align-items: center;
  }
`


export const HeaderBtnSearch = styled.span`

  display: flex;
  font-size: 2vw;
  color: ${props => props.theme.color_search_component};
  cursor: pointer;
  margin-right: .5vw;
  transition: .1s;
  
  //1024px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 3vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 4vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    flex: .09;
    font-size: 6vw;
    margin-right: 0;
    order: 3;
    justify-content: center;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    flex: .09;
    font-size: 6vw;
    margin-right: 0;
    order: 3;
    justify-content: center;
  }
`

export const HeaderInputSearch= styled.input`

  width: 14vw;
  height: 1.5vw;
  border: none;
  outline: none;
  background: transparent;
  color: #8f8f8f;
  font-size: 1vw;
  border-bottom: .5px solid ${props => props.theme.color_search_component};
  transition: .1s;
  
  //1024px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 20vw;
    height: 2vw;
    font-size: 1.3vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 25vw;
    height: 3vw;
    font-size: 1.9vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    flex: 1vw;
    height: 5vw;
    font-size: 3.5vw;
    order: 2;
    margin-left: 2vw;
    border: none;
    color: ${props => props.theme.color_search_component};
    &::placeholder {
      color: ${props => props.theme.color_search_component};
    }
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    flex: 1vw;
    height: 5vw;
    font-size: 3.5vw;
    order: 2;
    margin-left: 2vw;
    border: none;
    color: ${props => props.theme.color_search_component};
    &::placeholder {
      color: ${props => props.theme.color_search_component};
    }
  }
`

export const HeaderSelectTypeShow = styled.select `

  width: 4vw;
  height: 1.5vw;
  border: none;
  background: ${props => props.theme.color_search_component};
  color: ${props => props.theme.color_search_select_innerText};;
  text-align: center;
  margin-left: 1vw;
  outline: none;
  font-size: .75vw;
  transition: .1s;

  //1024px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 7vw;
    height: 2vw;
    font-size: 1.2vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 8vw;
    height: 3vw;
    font-size: 1.5vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    flex: .25;
    height: 6vw;
    font-size: 3.5vw;
    border-radius: 0;
    margin-left: 0;
    order: 1;
    background: transparent;
    color:${props => props.theme.color_search_component} ;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    flex: .25;
    height: 6vw;
    font-size: 3.5vw;
    border-radius: 0;
    margin-left: 0;
    order: 1;
    background: transparent;
    color:${props => props.theme.color_search_component} ;
  }
`
