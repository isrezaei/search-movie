import styled from "styled-components";

export const GridDisplay = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  
  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {

    grid-template-columns: repeat(3 , 28vw);
    grid-column-gap: 2vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20vw;
  }
  
  //320px
  //no need
`

export const CardParent = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  transition: .1s ease-in;
  cursor: pointer;
  &:hover
  {
    transform: scale(0.96);
  }
`

export const CardType = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3vw;
  height: 1vw;
  position: absolute;
  z-index: 1;
  right: .5vw;
  top: 1vw;
  border-radius: 2vw;
  background: #63efb1;
  font-size: .7vw;
  font-weight: bolder;
  color: black;
  
  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 7vw;
    height: 3vw;
    right: 1vw;
    top: 1.5vw;
    font-size: 1.9vw;
  }
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 15vw;
    height: 4.5vw;
    font-size: 3.5vw;
    right: 2.5vw;
    top: 5vw;
  }
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    top: 3vw;
  }
`

export const CardImage = styled.img`
  width: 16vw;
  height: 23vw;
  margin: .5vw 0;
  filter: brightness(80%);

  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 28vw;
    height: 40vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 70vw;
    height: 95vw;
    margin: 2vw auto;
  }
  //320px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    width: 60vw;
    height: 85vw;
  }
`

export const CardYear = styled.div`
  width: 60%;
  font-size: .85vw;
  font-weight: bold;
  color: ${props => props.theme.color_card_Year};

  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 1.8vw;
  }
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    margin-top: 1vw;
    font-size: 3.5vw;
  }
  //320px
  //no need
`

export const CardTitle = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1vw;
  font-weight: bold;
  color: ${props => props.theme.color_card_title};

  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 2vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 4vw;
  }
  
  //320px
  //no need
`


