import {useSelector} from "react-redux";
import {selectMovieIds} from "../../Redux/ResultFirstRenderSlice";
import ResultHomeCard from "./ResultHomeCard";
import {GridDisplay} from "../ResultStyled/ResultStyled";



const ResultHomeShow = () => {
    const MovieIds = useSelector(selectMovieIds)

    const MovieShow = MovieIds.map(ids => <ResultHomeCard key={ids} ids={ids}/>)

    return (

            <GridDisplay>
                {MovieShow}
            </GridDisplay>

    );
};

export default ResultHomeShow;