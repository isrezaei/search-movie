import React from "react";
import {useSelector} from "react-redux";
import {selectMovieIds} from "../../Redux/ResultFirstRenderSlice";
import ResultHomeCard from "./ResultHomeCard";
import {GridDisplay} from "../ResultComponentsStyled/ResultComponentsStyle";
import {ToastContainer} from 'react-toastify';
import styled from "styled-components";

const ResultHomeShow = () => {

    const MovieIds = useSelector(selectMovieIds)

    const MovieShow = MovieIds.map(ids => <ResultHomeCard key={ids} ids={ids}/>)

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    const ToastNotify = styled(ToastContainer)`
      .Toastify__toast {
        background: ${isDarkMood ? '#131313' : '#e0e0e0'} ;
        color: ${isDarkMood ? '#e0e0e0' : '#131313'} ;
        font-weight: bold;
      }
    `

    return (
        <>
            <ToastNotify/>
            <GridDisplay>
                {MovieShow}
            </GridDisplay>
        </>
    );
};

export default React.memo(ResultHomeShow);