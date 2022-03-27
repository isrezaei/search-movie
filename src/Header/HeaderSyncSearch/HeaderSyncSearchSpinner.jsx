import {FallingLines} from "react-loader-spinner";
import {HeaderSearchSpinner} from "./HeaderSyncSearchStyle";
import {useSelector} from "react-redux";


const HeaderSyncSearchSpinner = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    return (
        <HeaderSearchSpinner>
            <FallingLines width="50" color={isDarkMood ? '#20e28c' : 'rgb(235,131,7)'} />
        </HeaderSearchSpinner>
    );
};

export default HeaderSyncSearchSpinner;