import styled from "styled-components";


export const DetailsParent = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //background: #d7ce5d;
`

export const RightSideDetails = styled.div `
  //background: chartreuse;
  height: 100%;
  padding: 2vw;

  .DetailsPoster {
    width: 15vw;
    height: 22.2vw;
  }

  .DetailsFavorite {
    position: absolute;
    width: 2.8vw;
    height: 2.8vw;
    background: #fca688;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 26vw;
    left: 25vw;

    .Icon {
      font-size: 1.8vw;
      color: white;
    }
  }

  .DetailsRate {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: .5vw;

    .Imdb {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: .5vw 0;

      .ImdbLogo {
        width: 3vw;
      }

      .RateAndVotes {
        width: 75%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .ImdbRate {
          font-size: .8vw;
          font-weight: bold;
          font-family: 'Josefin Sans', sans-serif;
        }

        .BoldRate {
          font-size: 1.4vw;
          font-weight: bold;
          color: #e39400;
        }

        .ImdbVotes {
          font-family: 'Josefin Sans', sans-serif;
          font-weight: bold;
          font-size: .9vw;
          color: #e39400;
        }
      }
    }


    .RottenTomatoes {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 25%;
      margin: .3vw 0;


      .RottenTomatoesLogo {
        width: 1.5vw;
        filter: brightness(90%);
      }

      .RottenTomatoesRate {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1vw;
        font-weight: bold;
        color: tomato;
      }
    }

    .Metacritic {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin: .3vw 0;


      .MetacriticLogo {
        width: 1.5vw;
        filter: brightness(90%);
      }

      .MetacriticRate {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 1vw;
        font-weight: bold;
        color: cadetblue;
        margin-left: .7vw;
      }
    }


    .ShareSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 55%;
      height: auto;
      margin: .3vw 0;
    }

    .ShareIcone {
      font-size: 1.8vw;
    }

    .ShareText {
      font-family: 'Josefin Sans', sans-serif;
      font-size: .8vw;
      font-weight: bold;
    }

    .GetTickets {
      width: 100%;
      height: 2.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(235, 131, 7);
      color: white;
      margin: .5vw 0;
      cursor: pointer;
      border-radius: 5vw;
      font-size: 1vw;
      font-weight: bold;
    }

    .StarRate {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      margin: .5vw 0;
    }

    .RateText {
      font-size: 1vw;
      font-weight: bold;
      margin: .3vw 0;
    }


  }

`


export const LeftSideDetails = styled.div `
  width: 75%;
  height: 100%;
  //background: pink;
  padding: 2vw;

  .DetailsTitle {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 2vw;
    font-weight: bold;
  }

  .DetailsInfo {
    width: 75%;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: .5vw 0;

    .Options {
      background: #efe8d8;
      width: auto;
      height: 1.5vw;
      display: flex;
      font-size: .75vw;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      border-radius: 2vw;
      padding: .8vw .5vw;
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
      width: 20%;
      height: 2vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      
      .Icon
      {
        font-size: 1.5vw;
      }
      
      .Text
      {
        margin-left: .5vw;
        font-size: 1vw;
        font-weight: bold;
      }
    }
  }

  .DetailsOverview {
    width: 100%;
    height: 12vw;

    .OverviewText {
      font-size: 2vw;
      font-weight: bold;
      margin: .5vw 0;
    }

    .OverviewPlot {
      width: 70%;
      font-size: 1.1vw;
      font-weight: bold;
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
      }
      .Text
      {
        font-size: 1.7vw;
        font-weight: bold;
        margin-left: .5vw;
      }
    }

    .ActorName
    {
      font-size: 1.3vw;
      font-weight: bold;
    }

  }

  .DetailsCreator
  {
    width: 90%;
    height: 9vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Options
    {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

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
        }
        .Text
        {
          font-size: 1.5vw;
          font-weight: bolder;
        }
      }
      .DirectorName
      {
        font-size: .9vw;
        font-weight: bolder;
      }
    }
  }

`