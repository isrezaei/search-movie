import styled from "styled-components";
import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {nanoid} from "@reduxjs/toolkit";

export const Preloaded = styled.div`

  width : 100%;
  display : grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(5 , 16vw);
  grid-template-rows: repeat(2 , 26vw) ;
  grid-column-gap: 1vw;
  grid-row-gap: 1vw;

`

export const MoviePreloaded = ()=>
{

    let ArrayLoaded = []
    for (let C = 0 ; C < 10 ; C++){ ArrayLoaded.push(C) }

    const Loading = ArrayLoaded.map(()=> {

        return (

            <div key={nanoid()} style={{display : 'flex' , flexDirection : "column"}}>
                <Skeleton/>
                <Skeleton height='1vw' width= '6vw' />
                <Skeleton height='1vw' width= '10vw' />
            </div>
        )
    })

    return (
        <Preloaded>

            <SkeletonTheme baseColor="#202020" highlightColor="#444" height='23vw'>
                {Loading}
            </SkeletonTheme>



        </Preloaded>
    )

}



