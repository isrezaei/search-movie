import styled from "styled-components";
import {Carousel} from '3d-react-carousal';
import ImdbLogo from '../ImdbLogo.png'

import {SliderData, SliderImage, SliderPosterName, SliderImdbRate, SliderImdbLogo , BoldRate} from "./TopSectionSliderData";


const TopSectionHome = () => {

    const TextTopHome = styled.div`
      width: 85%;
      height: 33vw;
      margin: 2vw auto;
    `

    let slides = [
        <div>
            <SliderImage src={SliderData[0].image} alt={SliderData[0].id}/>
            <SliderImdbRate><BoldRate>{SliderData[0].imdbRate}</BoldRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{SliderData[0].posterName}</SliderPosterName>
        </div>,
        <div>
            <SliderImage src={SliderData[1].image} alt={SliderData[0].id}/>
            <SliderImdbRate><BoldRate>{SliderData[1].imdbRate}</BoldRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{SliderData[1].posterName}</SliderPosterName>
        </div>,
        <div>
            <SliderImage src={SliderData[2].image} alt={SliderData[0].id}/>
            <SliderImdbRate><BoldRate>{SliderData[2].imdbRate}</BoldRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{SliderData[2].posterName}</SliderPosterName>
        </div>,
        <div>
            <SliderImage src={SliderData[3].image} alt={SliderData[0].id}/>
            <SliderImdbRate><BoldRate>{SliderData[3].imdbRate}</BoldRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{SliderData[3].posterName}</SliderPosterName>
        </div>,
    ];


    return (

        <TextTopHome>
            <Carousel slides={slides} autoplay={false} interval={5000}/>
        </TextTopHome>
    );
};

export default TopSectionHome;