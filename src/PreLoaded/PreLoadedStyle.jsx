import styled from "styled-components";

export const PreloadStyle = styled.div`
  width : 100%;
  display : grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;
  margin-bottom: 2vw;
  
  .SkeletonPoster
  {
    height: 23vw;
    border-radius: 0;
  }
  
  .SkeletonTextOne
  {
    width: 6vw;
    height: 1vw;
    border-radius: 0;
    margin-top: .5vw;
  }
  
  .SkeletonTextTwo
  {
    width: 10vw;
    height: 1vw;
    border-radius: 0;
  }
  
  //1280px
  @media(max-width: ${props => props.theme.responsive.medium_screen}) {
    grid-template-columns: repeat(3 , 25vw);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;

    .SkeletonPoster
    {
      height: 37vw;
    }
    .SkeletonTextOne
    {
      width: 8vw;
      height: 1.3vw;
      margin-top: 1vw;
    }

    .SkeletonTextTwo
    {
      width: 18vw;
      height: 1.5vw;
    }
  }
  
  //900px
  @media(max-width: ${props => props.theme.responsive.small_screen}) {
    grid-template-columns: repeat(3 , 28vw);
    grid-column-gap: 2vw;
    grid-row-gap: 2vw;

    .SkeletonPoster
    {
     
      height: 40vw;
    }
    .SkeletonTextOne
    {
      width: 8vw;
      height: 1.3vw;
      margin-top: 1vw;
    }

    .SkeletonTextTwo
    {
      width: 18vw;
      height: 1.5vw;
    }
  }

  //600px
  @media(max-width: ${props => props.theme.responsive.large_mobile}) {
    grid-template-columns: repeat(2 , 35vw);
    grid-column-gap: 5vw;

    .SkeletonPoster
    {
      height: 50vw;
    }
    .SkeletonTextOne
    {
      width: 20vw;
      height: 2vw;
      margin-top: 1.5vw;
    }

    .SkeletonTextTwo
    {
      width: 30vw;
      height: 1.5vw;
    }
  }
  
  //480px
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: none;
  }
`

export const PreloadedMobileStyle = styled.div`

  width: 100%;
  font-size: 5vw;
  color: white;
  text-align: center;
  display: none;
  @media(max-width: ${props => props.theme.responsive.medium_mobile}) {
    display: block;
  }
`

export const Skeletal = styled.div`
  display: flex;
  flex-direction: column;
`