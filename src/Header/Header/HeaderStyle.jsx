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
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 25vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 25vw;
  }
`
export const Logo = styled.div`
  margin-left: 2vw;
  font-weight: bolder;
  font-size: 1.5vw;
  cursor: pointer;
  color: ${props => props.theme.color_Header_logo};
  transition: .1s;
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 7vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 7vw;
  }
`
export const Search = styled.div`
  margin-right: 2vw;
  width: auto;
  height: 3vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 100%;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
  }
`
export const ReadyToSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 95%;
    justify-content: space-around;
    align-items: center;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 95%;
    justify-content: space-around;
    align-items: center;
  }
  
  span
  {
    display: flex;
    font-size: 2vw;
    color: ${props => props.theme.color_search_component};
    cursor: pointer;
    margin-right: .5vw;
    transition: .1s;
    
    //320px
    @media(max-width: ${props => props.theme.responsive.small_mobile}) {
      flex: .09;
      font-size: 6vw;
      margin-right: 0;
      order: 3;
      justify-content: center;
    }
    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      flex: .09;
      font-size: 6vw;
      margin-right: 0;
      order: 3;
      justify-content: center;
    }
  }
  input
  {
    width: 14vw;
    height: 1.5vw;
    border: none;
    outline: none;
    background: transparent;
    color: #8f8f8f;
    font-size: 1vw;
    border-bottom: .5px solid ${props => props.theme.color_search_component};
    transition: .1s;
    
    //320px
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
  }
  
  select {
    width: 4vw;
    height: 1.5vw;
    border: none;
    background: ${props => props.theme.color_search_component};
    color: ${props => props.theme.color_search_select_innerText};;
    text-align: center;
    margin-left: 1vw;
    outline: none;
    font-size: .75vw;
    border-radius: 1vw;
    transition: .1s;
    
    //320px
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
  }
`
export const RenderSearch =  styled.div`
  display: ${({render}) => render};
  width: 15vw;
  height: 20vw;
  background: red;
  overflow-x: hidden;
  position: absolute;
  top: 3vw;
  z-index: 1;
  ::-webkit-scrollbar
  {
    width: 0;
  }
`