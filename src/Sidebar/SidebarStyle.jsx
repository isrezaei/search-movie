import styled from "styled-components";

export const SidebarStyle = styled.div`
  width: 4%;
  height: 24vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background_sidebar};
  position: fixed;
  top: 50%;
  left: 0;
  transform: translate(0% , -50%);
  transition: .1s;
  border-radius: 0 3vw 3vw 0;
  z-index: 1000;
  
  //1200
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 5%;
    height: 30vw;
    border-radius: 3vw 3vw 3vw 3vw;
    left: 2vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 40%;
    height: 8vw;
    top: auto;
    bottom: 0;
    left: 0;
    right: 0;
    transform: none;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 5vw 5vw 0 0;
    margin: auto;
  }
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 14vw;
    border-radius: 0;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    height: 18vw;
  }
`

const AdjustIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 4vw;
  font-size: 1.8vw;
  cursor: pointer;

  //1024
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    height: 6vw;
    font-size: 3vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    height: 4vw;
    margin-top: 0;
    font-size: 4vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 9vw !important;
    height: 8vw;
    margin-top: 0;
  }
  
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 10vw;
    height: 10vw;
    margin-top: 0;
  }
`

export const Icon = styled(AdjustIcon) `
  width: 100%;
  height: 4vw;
  color: ${({ActiveIcon , theme})=> ActiveIcon  ? theme.color_sidebar_active_icon : theme.color_sidebar_disable_icon};
  &:after
  {
    height: 0;
    content: '${({Name})=> Name}';
    display: ${({ActiveIcon})=> ActiveIcon ? 'block' : 'none'};;
    font-size: .65vw;
    transition: .1s;
    font-weight: bold;

    //1024
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      font-size: 1vw;
    }
    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      display: none;
    }
    //420px
    //380px
    //no need
  }
`

export const FavoriteBag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.1vw;
  height: 1.1vw;
  bottom: 8.3vw;
  right: .8vw;
  font-size: .70vw;
  font-weight: bolder;
  color: lavender;
  position: absolute;
  background: #ea3e3e;
  border-radius: 50%;
`


