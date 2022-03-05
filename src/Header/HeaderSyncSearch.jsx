import styled from "styled-components";
import NoImageAvailable from '../NoImageAvailable.svg'

const HeaderSyncSearch = ({value}) => {


    const SearchItems = styled.div`
      width: 100%;
      height: 5vw;
      background: #252525;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: 1px solid #494949;
      border-bottom: 1px solid #494949;
      :last-child
      {
        border-bottom: none;
      }
      :first-child 
      {
        border-top: none;
      }

      img {
        width: 3vw;
      }
    `
    const Info = styled.div`
      width: 10vw;
      height: 4vw;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      color: #e3e2e2;
    `



    return (
        <>
            <SearchItems>

                <img src={value.Poster === 'N/A'  ? NoImageAvailable : value.Poster}/>


                <Info>

                    <h4>{value.Title}</h4>
                    <div>{value.Year}</div>

                    <div>Type : {value.Type}</div>

                </Info>
            </SearchItems>
        </>
    );
};

export default HeaderSyncSearch;