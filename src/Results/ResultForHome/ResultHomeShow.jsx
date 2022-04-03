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

    return (
        <>
            <GridDisplay>
                {MovieShow}
            </GridDisplay>
        </>
    );
};

export default React.memo(ResultHomeShow);