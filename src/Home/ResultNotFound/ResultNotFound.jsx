import NotFoundImageDark from './ResultNotFoundDark.png'
import NotFoundImageLight from './ResultNotFoundLight.png'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Animated} from "react-animated-css";



const NotFoundSearch = styled.div`

  width: 85vw;
  height: 44vw;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.2vw;


  img
  {
    width: 47vw;
    transition: .1s;
  }
  p
  {
    font-size: 1.5vw;
    color: ${props => props.theme.color_please_search_text};
    transition: .1s;
    font-weight: 800;
  }
  
`

const ResultNotFound = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    return (
        <NotFoundSearch>
            <Animated animationIn="tada">
                <img src={isDarkMood ? NotFoundImageDark : NotFoundImageLight} alt={'NotFoundImage'}/>
            </Animated>
            <p>Movie or series not found " "</p>
        </NotFoundSearch>
    );
};

export default ResultNotFound;