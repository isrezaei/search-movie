
import styled from "styled-components";

export const SliderData = [
    {
        id : 1 ,
        posterName : 'Turning Res 2022',
        imdbRate : '7.0',
        image : 'https://user-images.githubusercontent.com/77073972/158149948-369f0a94-d0b2-4177-9bd1-abecd65a6221.jpg'
    },
    {
        id : 2 ,
        posterName : 'The Adam Project 2022',
        imdbRate : '7.3',
        image: 'https://user-images.githubusercontent.com/77073972/158149940-116f50a3-cfe1-4a96-88cd-312f2370d71b.jpg'
    },
    {
        id : 3 ,
        posterName : "The King's Man 2021",
        imdbRate : '6.7',
        image : 'https://user-images.githubusercontent.com/77073972/158149951-3b88b207-201f-459c-a30b-d59610c81805.jpg'
    },
    {
        id : 4 ,
        posterName : 'Scream 2022',
        imdbRate : '7.0',
        image: 'https://user-images.githubusercontent.com/77073972/158150491-d9977b6d-ff5c-4501-9cd1-54b3c0cb5bdc.jpg'
    }
]



export const SliderImage = styled.img`
  width: 100vw;
  filter: brightness(80%);
`
export const SliderPosterName = styled.p`
  font-family: 'Secular One', sans-serif;
  position: absolute;
  top: 26.5vw;
  left: 1.2vw;
  font-size: 2vw;
  color: snow;
`
export const SliderImdbRate = styled.p`
  font-family: 'Comfortaa', cursive;
  position: absolute;
  top : 21.5vw;
  left: 1.2vw;
  font-size: 1.2vw;
  font-weight: lighter;
  color: whitesmoke;
`

export const BoldRate =styled.b`
  color: yellow;
  font-size: 1.8vw;
  font-weight: bolder;
`

export const SliderImdbLogo = styled.img`
  width: 4vw;
  position: absolute;
  top : 23.9vw;
  left: 1.2vw;
  border-radius: 2vw;
`