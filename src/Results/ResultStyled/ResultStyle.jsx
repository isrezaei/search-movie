import styled from "styled-components";

export const GridDisplay = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    grid-template-columns: repeat(3 , 26vw);
    margin-bottom: 8vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    grid-template-columns: repeat(3 , 28vw);
    grid-column-gap: 2vw;
    margin-bottom: 10vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    grid-template-columns: repeat(2 , 40vw);
    margin-bottom: 15vw;
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

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 24vw;
    height: 35vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 28vw;
    height: 40vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 35vw;
    height: 50vw;
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

//750px
@media(max-width: ${props => props.theme.responsive.large_mobile}) {
  width: 7vw;
  height: 3vw;
  right: 4vw;
  top: 2vw;
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

  //1280
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 1.4vw;
  }

  //900
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 1.8vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 2.3vw;
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
  
  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 93%;
  }
  
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 100%;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 88%;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
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

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 1.5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 2vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 2.5vw;
  }
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 60vw;
    font-size: 4.3vw;
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


  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 4vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 6vw;
  }
  //320px
  //no need
`


export const PleaseSearch = styled.div`
  width: 85vw;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  p
  {
    font-size: 1.5vw;
    color: ${props => props.theme.color_please_search_text};
    transition: .1s;
  }
  strong
  {
    color: ${props => props.theme.color_please_search_text_strong};
    transition: .1s;
  }

  //1280
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    p 
    {
     font-size: 1.8vw; 
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      p
      {
        font-size: 2.5vw;
      }
    }

    //600px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      p
      {
        font-size: 4vw;
      }
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      p
      {
        font-size: 4.5vw;
      }
    }
  }
`
export const SearchIcon = styled.div `

  font-size: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.color_please_search_text_strong};
  transition: .1s;

  //1280
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 27vw;
  }
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    font-size: 40vw;
  }

  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    font-size: 46vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    font-size: 45vw;
  }
  
`

//extended from "PleaseSearch"
export const NotFoundSearch = styled(PleaseSearch)`
  p
  {
    color: ${props => props.theme.color_NotFound_text};
  }
  strong
  {
    color: ${props => props.theme.color_please_search_text_strong};
  }
`
//extended from "SearchIcon"
export const NotFoundIcon = styled(SearchIcon)`
  color: ${props => props.theme.color_NotFound_text_strong};
`

//extended from "PleaseSearch"
export const FavoriteList = styled(PleaseSearch)``
//extended from "SearchIcon"
export const FavoriteIcon = styled(SearchIcon)``


export const FavoriteParent = styled.div `
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 26vw);
  grid-column-gap: 1.5vw;
  width: 85%;
  margin: auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 100%;
    grid-template-columns: repeat(2, 40vw);
    margin-top: 2vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    grid-template-columns: repeat(2, 45vw);
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    grid-template-columns: repeat(1, 70vw);
    margin-top: 2vw;
    margin-bottom: 12vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    grid-template-columns: repeat(1, 85vw);
    grid-row-gap: 2vw;
    margin-top: 4vw;
    margin-bottom: 20vw;
  }
`

export const FavoriteSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1vw 0;
  width: 100%;
  height: 10vw;
  background-image: linear-gradient(${({FavoriteRandomBg}) => FavoriteRandomBg});
  padding: 1vw;
  transition: .1s;
  overflow: hidden;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    height: 15vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    height: 20vw;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    height: 25vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    height: 35vw;
  }
`

export const FavoriteImage = styled.img`
  width: 6vw;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    width: 10vw;
    padding: .5vw;
  }

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 15vw;
    padding: 1.5vw;
  }
  
  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 20vw;
    padding: 2.5vw;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    width: 26vw;
    padding: 2.5vw;
  }
    
`

export const FavoriteInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  text-align: center;


  .FavoriteParent 
  {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    height: 8vw;
    margin: 0 1vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      height: 12vw;
    }
    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      height: 17vw;
    }
    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      height: 20vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      height: 27vw;
    }
  }


  .TitleAdnYear {
    font-size: 1.1vw;
    white-space: nowrap;
    overflow: clip;
    font-weight: bolder;
    text-align: start;
    color: ${props => props.theme.color_Favorite_Title};
    transition: .1s;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      font-size: 2vw;
    }
    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      font-size: 2.5vw;
    }
    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      font-size: 3.2vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 50vw;
      font-size: 4.3vw;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      
    }
  }

  .FavoriteTypeAndDelete {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


  .FavoriteType {
    font-size: 1vw;
    font-weight: bolder;
    cursor: pointer;
    color: ${props => props.theme.color_Favorite_Title};
    transition: .1s;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      font-size: 1.5vw;
  }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      font-size: 2vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      font-size: 2.8vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      font-size: 3.5vw;
    }
}

.FavoriteRemove {
  font-size: 1.5vw;
  color: ${props => props.theme.color_Favorite_Title};
  cursor: pointer;
  transition: .1s;

  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    font-size: 2.3vw;
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
}

`