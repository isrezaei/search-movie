import {PreloadedMobileStyle} from "./PreLoadedStyle";
import {FallingLines} from "react-loader-spinner";
import {useSelector} from "react-redux";

const PreloadedMobile = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    return (
        <PreloadedMobileStyle>
            <FallingLines width="50" color={isDarkMood ? '#20e28c' : 'rgb(235,131,7)'} />
        </PreloadedMobileStyle>
    );
};

export default PreloadedMobile;