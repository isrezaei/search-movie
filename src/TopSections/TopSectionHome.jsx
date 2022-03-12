import styled from "styled-components";

const TopSectionHome = () => {

    const TextTopHome = styled.div`
      width: 85%;
      height: 6vw;
      margin: 2vw auto;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      h1 {
        font-size: 3vw;
        color: gray;
      }
      hr {
        width: 80%;
        border: 1px solid #525252;
      }
    `

    return (
        <TextTopHome>
            <h1>' Welcome please search Movie Or Series '</h1>
            <hr/>
        </TextTopHome>
    );
};

export default TopSectionHome;