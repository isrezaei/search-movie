import {useDispatch , useSelector} from "react-redux";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {ChangeDarkMood} from "../Redux/DarkMoodSlice";

const DarkMoodControl = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)
    const dispatch = useDispatch()

    return (
        <DarkModeSwitch
            sunColor = {!isDarkMood && '#f9a825'}
            moonColor = {isDarkMood && '#62727b'}
            checked={isDarkMood}
            onChange={()=> dispatch(ChangeDarkMood())}
            size={30}
        />
    );
}

export default DarkMoodControl;