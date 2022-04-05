import styled from "styled-components";


export const DetailsParent = styled.div`
  width: 80%;
  height: 40vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //background: #d7ce5d;
`

export const RightSideDetails = styled.div `
  //background: chartreuse;
  height: 100%;
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
    font-size: 3vw;
    font-weight: bold;
    
    .Year
    {
      margin: .5vw;
      font-size: 1.3vw;
    }
  }

  .DetailsInfo {
    width: 75%;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

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

  .DetailsImdbRate {

    width: 11%;
    height: 3vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ImdbLogo {
      width: 3vw;
      filter: brightness(90%);
    }

    .ImdbRate {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: .80vw;
      font-weight: bold;

      .BoldRate {
        font-size: 1.5vw;
        color: #e39400;
      }
    }
  }

  .DetailsOverview {
    width: 100%;
    height: 13vw;

    .OverviewText {
      font-size: 2.2vw;
      font-weight: bold;
      margin: .5vw 0;
    }

    .OverviewPlot {
      width: 70%;
      font-size: 1.3vw;
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
    width: 100%;
    height: 7vw;
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