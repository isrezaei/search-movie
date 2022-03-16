import PleaseSearchImageLight from './PleaseSearchLight.png'
import PleaseSearchImageDark from './PleaseSearchDark.png'
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Animated} from "react-animated-css";


const PleaseSearch = styled.div`

  width: auto;
  height: 41vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.2vw;

  img
  {
    width: 50vw;
  }
  p
  {
    font-size: 1.5vw;
    color: ${props => props.theme.color_please_search_text};
  }
  strong
  {
    color: ${props => props.theme.color_please_search_text_strong};
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