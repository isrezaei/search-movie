import styled from "styled-components";

export const GridDisplay = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

  //1200
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    grid-template-columns: repeat(3 , 26vw);
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
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

  //380px
  //no need
`

export const CardParent = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: .1s ease-in;
  cursor: pointer;

  &:hover
  {
    transform: scale(0.96);
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      transform: none;
    }
  }
`

export const CardImage = styled.img`
  width: 16vw;
  height: 23vw;
  margin: .5vw 0;
  filter: brightness(80%);

  //1200
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 24vw;
    height: 35vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 28vw;
    height: 40vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 70vw;
    height: 100vw;
    margin: 1vw auto;
  }
  //380px
  //no need
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
  background: ${props => props.theme.color_card_type};
  font-size: .7vw;
  font-weight: bolder;
  color: ${props => props.theme.color_card_type_innerText};
  transition: .1s;
}

//1280px
@media(max-width: ${props => props.theme.responsive.medium_screen}) {
  width: 5vw;
  height: 2vw;
  right: 2vw;
  top: 1.3vw;
  font-size: 1.3vw;
}

//900px
@media(max-width: ${props => props.theme.responsive.small_screen}) {
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
//380px
@media(max-width: ${props => props.theme.responsive.small_mobile}) {
  top: 4.5vw;
}
`

export const CardYear = styled.div`
  width: 60%;
  font-size: .85vw;
  font-weight: bold;
  color: ${props => props.theme.color_card_Year};

  //1200
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 1.4vw;
  }

  //900
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 1.8vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {

    font-size: 3.5vw;
  }
  //380px
  @media(max-width: ${props => props.theme.responsive.small_mobile}) {
    font-size: 4vw;
  }
  //no need
`

export const CardTitleFavorites = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 93%;
  }
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 100%;
  }
`

export const CardTitle = styled.div`
  width: 60%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1vw;
  font-weight: bolder;
  color: ${props => props.theme.color_card_title};

  //1200
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 1.5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 2vw;
  }
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 3.5vw;
    height: 6vw;
  }
  //380px
  //no need
`

export const CardFavorites = styled.div`
  font-size: 1.5vw;
  color: ${props => props.isFavorite ?'#ff5131' : 'cadetblue'};
  transition: .1s;

  //1280
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 2.5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 3vw;
    margin-right: 0;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 6vw;
  }
  //320px
  //no need
`

export const FavoriteParent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 40vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  overflow-y: scroll;
  margin: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const FavoriteSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1vw 0;
  width: 100%;
  padding: 1vw 0;
  border: 1px solid cadetblue;

`

export const FavoriteImage = styled.img`
    width: 8vw;
`

export const FavoriteInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  text-align: center;
  
  .FavoriteTitle
  {
    flex: 1.5;
    font-size: 1.1vw;
    white-space: nowrap;
    overflow: clip;
    font-weight: bolder;
    text-align: start;
  }
  .FavoriteName
  {
    flex: 1;
    font-size: .95vw;
    font-weight: bolder;
  }
  .FavoriteType
  {
    flex: .8;
    font-weight: bolder;
    color: snow;
    p
    {
      width: 50%;
      height: 1.2vw;
      margin: auto;
      border-radius: 1vw;
      background: cadetblue;
    }
  }
  
  .FavoriteDetails
  {
    flex: .8;
    font-weight: bolder;
    color: snow;
    p
    {
      width: 80%;
      height: 1.2vw;
      margin: auto;
      border-radius: 1vw;
      background: cadetblue;
    }
  }
  
  .FavoriteRemove
  {
    flex: 1;
    font-size: 1.3vw;
    color: indianred;
  }
  
`
