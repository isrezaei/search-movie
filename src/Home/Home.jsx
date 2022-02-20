import {useSelector} from "react-redux";
import MovieShow from "./MovieShow";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {GetImdbData} from "../Redux/ImdbSlice";

const Home = () => {


    const status = useSelector(state => state.ImdbSlice.status)
    const dispatch = useDispatch()
    // console.log(status)
    // console.log(MovieIds)
    let Rendering ;

    if (status === 'pending')
    {
        Rendering =  <h1>Loading ...</h1>
    }
    else if (status === 'success')
    {
        Rendering = <MovieShow/>
    }

    useEffect(()=>{
        status === 'idle' && dispatch(GetImdbData())
    } , [dispatch , status])


    return (
        <>
            {Rendering}
        </>
    );
};

export default Home;