import styled from "styled-components";


export const DetailsParent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    width: 90%;
  }

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`


export const LeftSideDetails = styled.div `
  height: 100%;
  padding: 2vw;

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 100%;
    padding: 2vw 0;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
  }

  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    justify-content: space-between;
   padding: 3vw;
  }

  .DetailsPoster {
    width: 15vw;
    height: 22.2vw;
    filter: brightness(80%);

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      width: 20vw;
      height: 30vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      width: 25vw;
      height: 35vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      width: 35vw;
      height: 49vw;
    }
    
    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 45vw;
      height: 65vw;
    }

  }

  .DetailsFavorite {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.background_project};
    top: 25.6vw;
    left: 24.4vw;
    padding: .3vw;

    .Icon {
      font-size: 2vw;
      color: ${({Favorite}) => Favorite ? 'rgba(255,81,49,0.82)' : '#ff8282'};
    }
    
    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      top: 35.9vw;
      left: 29vw;
      .Icon {
        font-size: 2.5vw;
      }
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      top: 41.9vw;
      left: 28.4vw;
      .Icon {
        font-size: 3vw;
      }
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      top: 54.4vw;
      left: 36.3vw;
      .Icon {
        font-size: 4.5vw;
      }
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      top: 85vw;
      left: 43vw;
      .Icon {
        font-size: 8vw;
      }
    }
  }

  .DetailsRate {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: .5vw;
    
    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      margin-top: .3vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      margin-top: .6vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      width: 50%;
      margin-top: 0;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 45%;
    }

    .Imdb {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: .5vw 0;

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        margin: 1vw 0;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        margin: 2vw 0;
      }
      
      
      .ImdbLogo {
        width: 3vw;
        
        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          width: 4.5vw;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          width: 5.5vw;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          width: 8vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          width: 12vw;
        }
      }

      .RateAndVotes {
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          width: 73%;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          width: 73%;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          width: 80%;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          width: 60%;
        }

        .ImdbRate {
          font-size: .8vw;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
          color: ${props => props.theme.color_Details_Titles};
          transition: .1s;

          //1280px
          @media(max-width: ${props => props.theme.responsive.medium_screen}) {
            font-size: 1.2vw;
          }

          //900px
          @media(max-width: ${props => props.theme.responsive.small_screen}) {
            font-size: 1.2vw;
          }

          //750px
          @media(max-width: ${props => props.theme.responsive.large_mobile}) {
            font-size: 2vw;
          }


          //480px
          @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
            font-size: 3.5vw;
          }
        }

        .BoldRate {
          font-size: 1.4vw;
          font-weight: bold;
          color: #e39400;
          //1280px
          @media(max-width: ${props => props.theme.responsive.medium_screen}) {
            font-size: 1.9vw;
          }

          //900px
          @media(max-width: ${props => props.theme.responsive.small_screen}) {
            font-size: 2.3vw;
          }

          //750px
          @media(max-width: ${props => props.theme.responsive.large_mobile}) {
            font-size: 5vw;
          }
        }

        .ImdbVotes {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: bold;
          font-size: .9vw;
          color: ${props => props.theme.color_Details_Titles};
          transition: .1s;

          //1280px
          @media(max-width: ${props => props.theme.responsive.medium_screen}) {
            font-size: 1.1vw;
          }

          //900px
          @media(max-width: ${props => props.theme.responsive.small_screen}) {
            font-size: 1.5vw;
          }

          //750px
          @media(max-width: ${props => props.theme.responsive.large_mobile}) {
            font-size: 2vw;
          }

          //480px
          @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
            display: none;
          }
          
        }
      }
    }


    .RottenTomatoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 27%;
      margin: .3vw 0;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        width: 28%;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        width: 32%;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        width: 26%;
        margin: 1vw 0;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        width: 50%;
          margin: 2vw 0
      }

      .RottenTomatoesLogo {
        width: 1.5vw;
        filter: brightness(90%);

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          width: 2.5vw;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          width: 3.5vw;
        }
        
        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          width: 5vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          width: 8vw;
        }
        
      }

      .RottenTomatoesRate {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1vw;
        font-weight: bold;
        color: tomato;

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          font-size: 1.3vw;
        }
        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          font-size: 1.8vw;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          font-size: 3vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          font-size: 4.5vw;
        }
      }
    }

    .Metacritic {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 27%;
      margin: .3vw 0;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        width: 28%;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        width: 32%;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        width: 26%;
        margin: 1vw 0;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        width: 50%;
        margin: 2vw 0
      }

      .MetacriticLogo {
        width: 1.5vw;
        filter: brightness(90%);

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          width: 2.5vw;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          width: 3.5vw;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          width: 5vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          width: 8vw;
        }
      }

      .MetacriticRate {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1vw;
        font-weight: bold;
        color: cadetblue;
        margin-left: .7vw;

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          font-size: 1.3vw;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          font-size: 1.8vw;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          font-size: 3vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          font-size: 4.5vw;
        }
      }
    }


    .ShareSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 55%;
      height: auto;
      margin: .3vw 0;
      cursor: pointer;


      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        width: 60%;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        width: 50%;
      }
      
      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        width: 100%;
        justify-content: flex-start;
      }
    }
    
    .ShareIcone {
      font-size: 1.8vw;
      color: ${props => props.theme.color_details_icons};
      transition: .1s;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        font-size: 2.5vw;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        font-size: 3.5vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        font-size: 5.5vw;
        margin: .5vw 0;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        font-size: 8vw;
      }
    }

    .ShareText {
      font-family: 'Josefin Sans', sans-serif;
      font-size: .8vw;
      font-weight: bold;
      color: ${props => props.theme.color_Details_Titles};
      transition: .1s;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        font-size: 1.1vw;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        font-size: 1.5vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        font-size: 2.2vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        font-size: 3.2vw;
        margin-left: 1vw;
      }
    }

    .GetTickets {
      width: 100%;
      height: 2.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${props => props.theme.color_details_icons};
      color: ${props => props.theme.color_details_ticket_innerText};
      transition: .1s;
      margin: .5vw 0;
      cursor: pointer;
      border-radius: 5vw;
      font-size: 1vw;
      font-weight: bold;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        font-size: 1.3vw;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        height: 4vw;
        font-size: 1.8vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        height: 5.5vw;
        font-size: 2.3vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        height: 7vw;
        font-size: 3.5vw;
      }
    }

    .StarRate {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: 2vw 0 0 0;
      

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        width: 50%;
        margin: .5vw 0 0 0;
        .Stars
        {
          width: 20vw;
        }
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        margin: 3vw 0 0 0;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        width: 100%;
        align-items: center;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        align-items: flex-start;

        .Stars
        {
          width: 100%;
        }
        
      }
        
    }

    .RateText {
      font-size: 1vw;
      font-weight: bold;
      margin: .3vw 0;
      color: ${props => props.theme.color_Details_Titles};
      transition: .1s;
      margin-left: .2vw;


      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        margin-left: .5vw;
        font-size: 1.6vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        margin-left: 0;
        font-size: 2.5vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        margin-left: .8vw;
        font-size: 4vw;
      }
      
    }
  }

`


export const RightSideDetails = styled.div `
  width: 75%;
  height: 100%;
  padding: 2vw;

  //750px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    width: 95%;
  }

  .DetailsTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2vw;
    font-weight: bold;
    color: ${props => props.theme.color_Details_Titles};
    transition: .1s;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      font-size: 3vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      font-size: 3.5vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      font-size: 4.3vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      font-size: 6vw;
    }
  }

  .DetailsInfo {
    width: 75%;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5vw 0;
    
    
    .Options {
      background: ${props => props.theme.color_Details_Bag};
      color: ${props => props.theme.color_Details_Bag_InnerText};
      width: auto;
      height: 1.5vw;
      display: flex;
      font-size: .75vw;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 2vw;
      padding: .8vw .5vw;
      transition: .1s;
    }

    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      height: 4vw;
      .Options {
        font-size: 1vw;
      }
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      height: 5vw;
      .Options {
        font-size: 1.3vw;
        padding: 1.1vw;
      }
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      height: 7.5vw;
      .Options {
        font-size: 1.8vw;
        padding: 1.5vw;
      }
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 100%;
      height: 35vw;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: flex-start;
      .Options {
        font-size: 3vw;
        padding: 2.5vw;
      }
    }
  }

  .DetailsAdditionInfo
  {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .Options
    {
      width: 100%;
      height: 2vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;


      .Icon
      {
        font-size: 1.5vw;
        color: ${props => props.theme.color_details_icons};
        transition: .1s;
      }

      .Text
      {
        margin-left: .5vw;
        font-size: 1vw;
        font-weight: bold;
        color: ${props => props.theme.color_Details_Titles};
        transition: .1s;
      }
    }

    @media(max-width: ${props => props.theme.responsive.medium_screen}) {

      .Options
      {
        height: 3vw;
        .Icon
        {
          font-size: 2vw;
        }

        .Text
        {
          font-size: 1.3vw;
        }
      }
      
    }
    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      .Options
      {
        height: 4vw;
        .Icon
        {
          font-size: 3.2vw;
        }
        .Text
        {
          font-size: 1.8vw;
        }
      }
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      .Options
      {
        height: 6vw;
        .Icon
        {
          font-size:4.5vw;
        }

        .Text
        {
          font-size: 2.3vw;
        }
      }
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      width: 100%;
      margin: 2vw 0;
      .Options
      {
        height: 10vw;
        .Icon
        {
          font-size: 8vw;
        }

        .Text
        {
          font-size: 4vw;
          margin-left: 2vw;
        }
      }
    }
    
  }

  .DetailsOverview {
    width: 100%;
    height: 12vw;

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      height: 17vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      height: 25vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      height: 45vw;
    }

    .OverviewText {
      font-size: 2vw;
      font-weight: bold;
      margin: .5vw 0;
      color: ${props => props.theme.color_details_icons};
      transition: .1s;
      
      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        margin: .8vw 0;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        margin: 1vw 0;
        font-size: 3vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        margin: 1vw 0;
        font-size: 4.5vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        margin: 1vw 0;
        font-size: 7vw;
      }
    }

    .OverviewPlot {
      width: 70%;
      font-size: 1.1vw;
      font-weight: bold;
      color: ${props => props.theme.color_Details_Titles};
      transition: .1s;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        font-size: 1.4vw;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        width: 95%;
        font-size: 1.8vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        width: 100%;
        font-size: 2.5vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        font-size: 4vw;
      }
    }
  }


  .DetailsActor
  {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    .IconAndText
    {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: .5vw 0;

      .Icone
      {
        font-size: 4.5vw;
        color: ${props => props.theme.color_details_icons};
        transition: .1s;

        //1280px
        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          font-size: 6vw;
        }
        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          font-size: 8vw;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          font-size: 12vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          font-size: 18vw;
        }
      }
      .Text
      {
        font-size: 1.7vw;
        font-weight: bold;
        margin-left: .5vw;
        color: ${props => props.theme.color_Details_Titles};
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
          font-size: 3vw;
        }
        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          font-size: 5.3vw;
        }
      }
    }

    .ActorName
    {
      font-size: 1.3vw;
      font-weight: bold;
      color: ${props => props.theme.color_Details_Titles};
      transition: .1s;

      //1280px
      @media(max-width: ${props => props.theme.responsive.medium_screen}) {
        font-size: 1.4vw;
      }

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        font-size: 2vw;
      }

      //750px
      @media(max-width: ${props => props.theme.responsive.large_mobile}) {
        font-size: 2.3vw;
      }

      //480px
      @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
        font-size: 3.5vw;
      }
    }
  }

  .DetailsCreator
  {
    width: 90%;
    height: 9vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    //1280px
    @media(max-width: ${props => props.theme.responsive.medium_screen}) {
      width: 60vw;
      height: 12vw;
      margin-bottom: 8vw;
    }

    //900px
    @media(max-width: ${props => props.theme.responsive.small_screen}) {
      width: 100%;
      height: auto;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin-bottom: 12vw;
    }

    //750px
    @media(max-width: ${props => props.theme.responsive.large_mobile}) {
      height: 40vw;
    }

    //480px
    @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
      height: 60vw;
    }

    .Options
    {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      //900px
      @media(max-width: ${props => props.theme.responsive.small_screen}) {
        margin: 1vw 0;
      }

      .IconAndText
      {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: .5vw 0;
        
        .Icone
        {
          font-size: 2vw;
          margin-right: .5vw;
          color: ${props => props.theme.color_details_icons};
          transition: .1s;
          
          //1280px
          @media(max-width: ${props => props.theme.responsive.medium_screen}) {
            font-size: 3.5vw;
          }

          //900px
          @media(max-width: ${props => props.theme.responsive.small_screen}) {
            font-size: 4.5vw;
          }

          //750px
          @media(max-width: ${props => props.theme.responsive.large_mobile}) {
            font-size: 6vw;
          }

          //480px
          @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
            font-size: 9vw;
          }
        }
   
        .Text
        {
          font-size: 1.5vw;
          font-weight: bolder;
          color: ${props => props.theme.color_Details_Titles};
          transition: .1s;

          //1280px
          @media(max-width: ${props => props.theme.responsive.medium_screen}) {
            font-size: 1.8vw;
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
            font-size: 4.5vw;
            margin-left: 2vw;
          }
        }
      }
      .DirectorName
      {
        font-size: .9vw;
        font-weight: bolder;
        color: ${props => props.theme.color_Details_Titles};
        transition: .1s;

        @media(max-width: ${props => props.theme.responsive.medium_screen}) {
          font-size: 1.2vw;
        }

        //900px
        @media(max-width: ${props => props.theme.responsive.small_screen}) {
          width: 100%;
          font-size: 1.8vw;
          text-align: start;
        }

        //750px
        @media(max-width: ${props => props.theme.responsive.large_mobile}) {
          font-size: 2.3vw;
        }

        //480px
        @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
          font-size: 3.5vw;
        }
      }
    }
  }

`