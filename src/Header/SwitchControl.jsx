import {useState} from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const SwitchControl = () => {

    const [isDarkMode, setDarkMode] = useState(true);

    const toggleDarkMode = (checked) => {
        setDarkMode(!checked);
    }

    return (
        <DarkModeSwitch
            checked={isDarkMode}
            onChange={()=> toggleDarkMode(isDarkMode)}
            size={40}
        />
    );
}

export default SwitchControl;