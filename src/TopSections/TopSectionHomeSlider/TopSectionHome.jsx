import styled from "styled-components";
import ImdbLogo from '../../ImdbLogo.png'
import {Carousel} from '3d-react-carousal';
import {RiHeartAddFill} from 'react-icons/ri'
import {SliderData} from "./SliderData";
import {
    SliderImage,
    SliderPosterName,
    SliderImdbRate,
    SliderImdbLogo,
    BoldRate,
    SliderAddFavorite} from "./SliderStyle";

const TopSectionHome = () => {

    const Parent = styled.div`
      width: 95%;
      height: 75vh;
      margin: 2vw auto;
    `

    let slides = SliderData.map(data =>
        <div>
            <SliderImage src={data.image} alt={data.id}/>
            <SliderImdbRate><BoldRate>{data.imdbRate}</BoldRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{data.posterName}</SliderPosterName>
            <SliderAddFavorite><RiHeartAddFill/></SliderAddFavorite>
        </div>
    )

    return (

        <Parent>
            <Carousel slides={slides} autoplay={true} interval={5000}/>
        </Parent>
    );
};

export default TopSectionHome;