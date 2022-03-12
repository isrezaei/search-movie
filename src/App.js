import {Routes, Route} from "react-router-dom";
import HeaderMaster from "./Header/HeaderMaster/HeaderMaster";
import MovieReadyToRender from "./Home/ResultForHome/MovieReadyToRender";
import ResultMovieRender from "./Home/ResultSearchMovie/ResultMovieRender";
import ResultSeriesRender from "./Home/ResultSearchSeries/ResultSeriesRender";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Sidebar from "./Sidebar/Sidebar";






function App() {
    return (
        <div>

            <HeaderMaster/>

                <Routes>
                    <Route path='/' exact element={<MovieReadyToRender/>}/>
                    <Route path='/search/movie'  element={<ResultMovieRender/>}/>
                    <Route path='/search/series' element={<ResultSeriesRender/>}/>
                    <Route path='Details/:imdbID' element={<Details/>}/>
                    <Route path='*' element={<NotFound404/>}/>
                </Routes>


            <Sidebar/>

        </div>
    )
}

export default App;
