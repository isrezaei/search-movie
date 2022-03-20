import styled from "styled-components";

export const SidebarStyle = styled.div`
  width: 4%;
  height: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.background_sidebar};
  position: fixed;
  bottom: 0;
  left: 0;
  transform: translate(0% , -70%);
  transition: .1s;
  border-radius: 0 1vw 1vw 0;

  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 100%;
    height: 18vw;
    bottom: 0;
    transform: none;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 100%;
    height: 14vw;
    bottom: 0;
    transform: none;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0;
  }
`

const AdjustIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  
  height: 3vw;
  margin-top: 1.5vw;
  font-size: 1.8vw;
  cursor: pointer;

  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 10vw;
    height: 10vw;
    margin-top: 0;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 8.5vw;
    height: 8vw;
    margin-top: 0;
  }
`

export const Icon = styled(AdjustIcon) `
  color: ${({ActiveIcon , theme})=> ActiveIcon  ? theme.color_sidebar_active_icon : theme.color_sidebar_disable_icon};
  &:after
  {
    height: 1vw;
    content: '${({Name})=> Name}';
    display: ${({ActiveIcon})=> ActiveIcon ? 'block' : 'none'};;
    font-size: .65vw;
    transition: .1s;

    //320px
    @media(max-width: ${props => props.theme.responsive.small_mobile}) {
      display: none;
    }
    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      display: none;
    }
  }
`


