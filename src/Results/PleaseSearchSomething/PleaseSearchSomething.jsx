import {Animated} from "react-animated-css";

import {MdOutlineScreenSearchDesktop} from 'react-icons/md'
import {PleaseSearch , SearchIcon} from "../ResultComponentsStyled/ResultComponentsStyle";


const PleaseSearchSomething = () => {

    return (
        <PleaseSearch>
            <Animated animationIn="tada">
                <SearchIcon>
                    <MdOutlineScreenSearchDesktop/>
                </SearchIcon>
            </Animated>
            <p>Please search something <strong>in search box</strong></p>
        </PleaseSearch>


    );
};

export default PleaseSearchSomething;