import React from "react";
import {createRef} from "react";
import {ScrollTo} from "react-scroll-to";
import {
    UnderSliderSection,
    UnderSection,
    UpperSection,
    ReferenceToLatestMovie,
    ReferenceToRandomMovie
} from "./UpperUnderHomeSliderStyle";

const UnderSlideTextRef = createRef()
export const UpperSlider = () =>
{
    return (
        <UpperSection>
            <h3>Welcome</h3>
            <hr/>
            <ScrollTo>
                {({ scroll }) => (
                    <ReferenceToRandomMovie onClick={() => scroll({ x: 0 , y: UnderSlideTextRef.current.offsetTop , smooth: true})}> Random movies and series</ReferenceToRandomMovie>
                )}
            </ScrollTo>
            <ReferenceToLatestMovie>The Latest Movie</ReferenceToLatestMovie>
        </UpperSection>
    )
}

export const UnderSlider = () =>
{
    return (
        <UnderSection ref={UnderSlideTextRef}>
            <UnderSliderSection>Random movies and series</UnderSliderSection>
        </UnderSection>
    )
}