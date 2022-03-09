import {useState} from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMoodControl = () => {

    const [isDarkMode, setDarkMode] = useState(true);

    const toggleDarkMode = (checked) => {
        setDarkMode(!checked);
    }

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={()=> toggleDarkMode(isDarkMode)}
            size={30}
        />
    );
}

export default DarkMoodControl;