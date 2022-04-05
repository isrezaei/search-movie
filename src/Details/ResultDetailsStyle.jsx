import styled from "styled-components";


export const DetailsParent = styled.div`
  width: 80%;
  height: 40vw;
  position: absolute;
  top : 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  //background: darkcyan;
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
    font-size: 3vw;
    font-weight: bold;
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
  
  .DetailsOverview
  {
    width: 100%;
    height: 15vw;
   
    
    .OverviewText
    {
      font-size: 2vw;
      font-weight: bold;
      margin: .5vw 0;
    }
    .OverviewPlot
    {
      width: 70%;
      font-size: 1vw;
      font-weight: bold;
    }
  }

`