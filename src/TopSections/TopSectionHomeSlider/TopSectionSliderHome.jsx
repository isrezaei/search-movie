import ImdbLogo from '../../ImdbLogo.png'
import {Carousel} from '3d-react-carousal';
import {RiHeartAddFill} from 'react-icons/ri'
import {SliderData} from "./SliderData";
import React from "react";
import {
    SliderImage,
    SliderPosterName,
    SliderImdbRate,
    SliderImdbLogo,
    BoldRate,
    ParentSlider,
    SliderAddFavorite} from "./SliderStyle";

const TopSectionSliderHome = () => {



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

        <ParentSlider>
            <Carousel slides={slides} autoplay={true} interval={5000}/>
        </ParentSlider>
    );
};

export default React.memo(TopSectionSliderHome);