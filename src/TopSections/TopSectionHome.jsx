import styled from "styled-components";
import {Carousel} from '3d-react-carousal';
import Image1 from './1.jpg'
import Image2 from './2.jpg'
import Image3 from './3.jpg'
import Image4 from './4.jpg'


const TopSectionHome = () => {

    const TextTopHome = styled.div`
      width: 85%;
      height: 33vw;
      margin: 2vw auto;
    `

    const SlideImage = styled.img`
    
        width: 100vw;
      
    
    
    `


    let slides = [
        <SlideImage  src={Image1} alt="1" />,
        <SlideImage  src={Image2} alt="2" />  ,
        <SlideImage  src={Image3} alt="3" />  ,
        <SlideImage  src={Image4} alt="4" />  ,
    ];




    return (

        <TextTopHome>
            <Carousel slides={slides} autoplay={true} interval={2500}/>
        </TextTopHome>
    );
};

export default TopSectionHome;