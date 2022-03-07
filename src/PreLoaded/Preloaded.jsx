import {PreloadStyle , Skeletal} from "./PreLoadedStyle";
import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {nanoid} from "@reduxjs/toolkit";


export const Preloaded = ()=>
{
    let ArrayLoaded = []
    for (let C = 0 ; C < 10 ; C++)
    {
        ArrayLoaded.push(C)
    }

    const Loading = ArrayLoaded.map(()=> {
        return (
            <Skeletal key={nanoid()}>
                <Skeleton/>
                <Skeleton height='1vw' width= '6vw' />
                <Skeleton height='1vw' width= '10vw' />
            </Skeletal>
        )
    })

    return (
        <PreloadStyle>
            <SkeletonTheme baseColor="#202020" highlightColor="#444" height='23vw'>
                {Loading}
            </SkeletonTheme>
        </PreloadStyle>
    )
}



