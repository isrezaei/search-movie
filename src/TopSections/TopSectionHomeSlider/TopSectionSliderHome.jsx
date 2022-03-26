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
    ParentSlider,
    DivMobileSlider,
    SliderAddFavorite,
    SliderYellowRate
} from "./SliderStyle";

import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards} from 'swiper';

import 'swiper/css';
import "swiper/css/bundle";
import "swiper/css/effect-cards";



const TopSectionSliderHome = () => {

    let ScreenSlider = SliderData.map(data =>
        <div>
            <SliderImage src={data.image} alt={data.id}/>
            <SliderImdbRate><SliderYellowRate>{data.imdbRate}</SliderYellowRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{data.posterName}</SliderPosterName>
            <SliderAddFavorite><RiHeartAddFill/></SliderAddFavorite>
        </div>
    )


    let MobileSlider = SliderData.map(data =>
        <SwiperSlide key={data.id}>
            <SliderImage src={data.smallImage} alt={data.id}/>
            <SliderImdbRate><SliderYellowRate>{data.imdbRate}</SliderYellowRate>/10</SliderImdbRate>
            <SliderImdbLogo src={ImdbLogo}/>
            <SliderPosterName>{data.posterName}</SliderPosterName>
            <SliderAddFavorite><RiHeartAddFill/></SliderAddFavorite>
        </SwiperSlide>
    )


    return (

        <>


                <DivMobileSlider>
                    <Swiper
                        modules={[EffectCards]}
                        effect={"cards"}
                        grabCursor={true}
                    >
                        {MobileSlider}
                    </Swiper>
                </DivMobileSlider>

            <ParentSlider>
                <Carousel slides={ScreenSlider} autoplay={true} interval={5000}/>
            </ParentSlider>


        </>
    );
};

export default React.memo(TopSectionSliderHome);