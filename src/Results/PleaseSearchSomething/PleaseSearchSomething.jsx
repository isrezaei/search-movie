import PleaseSearchImageLight from './PleaseSearchLight.png'
import PleaseSearchImageDark from './PleaseSearchDark.png'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Animated} from "react-animated-css";


const PleaseSearch = styled.div`

  width: 85vw;
  height: 44vw;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
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
    
  }
  strong
  {
    color: ${props => props.theme.color_please_search_text_strong};
    transition: .1s;
  }
  
`







const PleaseSearchSomething = () => {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)


    return (

            <PleaseSearch>
                <Animated animationIn="tada">
                <img src={isDarkMood ? PleaseSearchImageDark : PleaseSearchImageLight} alt='Please search something'/>
                </Animated>
                <p>Please search something <strong>in search box</strong></p>
            </PleaseSearch>


    );
};

export default PleaseSearchSomething;