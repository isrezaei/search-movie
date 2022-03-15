import {createRef} from "react";
import {ScrollTo} from "react-scroll-to";
import { Upper, Under , Latest , UnderSliderSection , UnderSliderScrollToBtn } from "./UpperUnderHomeSliderStyle";

const UnderSlideTextRef = createRef()
export const UpperSlider = () =>
{
    return (
        <Upper>
            <h3>Welcome</h3>
            <hr/>
            <ScrollTo>
                {({ scroll }) => (
                    <UnderSliderScrollToBtn onClick={() => scroll({ x: 0 , y: UnderSlideTextRef.current.offsetTop , smooth: true})}> Random movies and series</UnderSliderScrollToBtn>
                )}
            </ScrollTo>
            <Latest >The Latest Movie</Latest>
        </Upper>
    )
}

export const UnderSlider = () =>
{
    return (
        <Under ref={UnderSlideTextRef}>
            <UnderSliderSection>Random movies and series</UnderSliderSection>
        </Under>
    )
}