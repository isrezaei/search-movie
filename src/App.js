import {Routes, Route} from "react-router-dom";
import Header from "./Header/Header/Header";
import ResultHomeReadyToRender from "./Home/ResultForHome/ResultHomeReadyToRender";
import ResultMovieRender from "./Home/ResultSearchMovie/ResultMovieRender";
import ResultSeriesRender from "./Home/ResultSearchSeries/ResultSeriesRender";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Sidebar from "./Sidebar/Sidebar";






function App() {
    return (
        <div>
            <Header/>
                <Routes>
                    <Route path='/' exact element={<ResultHomeReadyToRender/>}/>
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
