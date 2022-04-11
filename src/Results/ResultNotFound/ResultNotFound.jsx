import {Animated} from "react-animated-css";
import {BiMessageError} from 'react-icons/bi'
import {useSelector} from "react-redux";
import {NotFoundSearch , NotFoundIcon} from "../ResultStyled/ResultStyle";


const ResultNotFound = () => {

    const SearchValue = useSelector(state => state.ResultSearchSlice.searchValue)
    return (
        <NotFoundSearch>
            <Animated animationIn="tada">
                <NotFoundIcon><BiMessageError/></NotFoundIcon>
            </Animated>
            <p>Movie or series not found <strong>" {SearchValue} "</strong></p>
        </NotFoundSearch>
    );
};

export default ResultNotFound;