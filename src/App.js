import {Routes, Route} from "react-router-dom";
import HeaderMaster from "./Header/HeaderMaster/HeaderMaster";
import MovieReadyToRender from "./Home/Movies/MovieReadyToRender";
import SeriesReadyToRender from "./Home/Series/SeriesReadyToRender";
import ResultSearchReadyToRender from "./Home/ResultSearchMovie/ResultSearchReadyToRender";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Sidebar from "./Sidebar/Sidebar";





function App() {
    return (
        <div>

            <HeaderMaster/>

                <Routes>
                    <Route path='/' exact element={<MovieReadyToRender/>}/>
                    <Route path='/search/movie'  element={<ResultSearchReadyToRender/>}/>
                    <Route path='/series' element={<SeriesReadyToRender/>}/>
                    <Route path='Details/:imdbID' element={<Details/>}/>
                    <Route path='*' element={<NotFound404/>}/>
                </Routes>


            <Sidebar/>

        </div>
    )
}

export default App;
