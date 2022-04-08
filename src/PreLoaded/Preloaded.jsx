import {PreloadStyle , Skeletal} from "./PreLoadedStyle";
import Skeleton ,{SkeletonTheme} from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {nanoid} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";


export const Preloaded = ()=>
{

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    let ArrayLoaded = []
    for (let C = 0 ; C < 10 ; C++)
    {
        ArrayLoaded.push(C)
    }

    const Loading = ArrayLoaded.map(()=> {
        return (
            <Skeletal key={nanoid()}>
                <Skeleton className='SkeletonPoster'/>
                <Skeleton className='SkeletonTextOne'/>
                <Skeleton className='SkeletonTextTwo'/>
            </Skeletal>
        )
    })

    return (
        <PreloadStyle>
            <SkeletonTheme baseColor={isDarkMood ? '#202020' : '#cfcfcf'} highlightColor={isDarkMood ? '#2a2a2a' : '#d9d9d9'}>
                {Loading}
            </SkeletonTheme>
        </PreloadStyle>
    )
}



