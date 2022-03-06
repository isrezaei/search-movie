import styled from "styled-components";
import NoImageAvailable from '../NoImageAvailable.svg'
import {Link} from "react-router-dom";

const HeaderSyncSearch = ({value , InputValue}) => {

    const SearchItems = styled.div`
      width: 100%;
      height: auto;
      background: #252525;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding : .1vw 0 ;
      transition : .1s;
      :hover
      {
        background: #6c6c6c;
      }
    `
    const Image = styled.img`
      width: 3vw;
      padding: .5vw 0 ;
    `
    const Info = styled.div`
      width: 11vw;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      white-space: break-spaces;
      color: #e3e2e2;
      padding: .5vw 0 ;
    `

    return (
        <Link onClick={()=> InputValue.unsubscribe()} style={{textDecoration : 'none'}} to={`Details/${value.imdbID}`}>
            <SearchItems>
                <Image src={value.Poster === 'N/A'  ? NoImageAvailable : value.Poster}/>
                <Info>
                    <h4>{value.Title}</h4>
                    <div>{value.Year}</div>
                    <div>Type : {value.Type}</div>
                </Info>
            </SearchItems>
        </Link>
    );
};

export default HeaderSyncSearch;