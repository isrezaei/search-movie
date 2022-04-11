import {RiPagesLine} from 'react-icons/ri'
import {NotFoundIcon, NotFoundSearch} from "../Results/ResultComponentsStyled/ResultComponentsStyle";
import {Animated} from "react-animated-css";


const NotFound404 = () => {
    return (
        <NotFoundSearch>
            <Animated animationIn="tada">
                <NotFoundIcon><RiPagesLine/></NotFoundIcon>
            </Animated>
            <p>Page not found <strong>Try again</strong></p>
        </NotFoundSearch>
    );
};

export default NotFound404;