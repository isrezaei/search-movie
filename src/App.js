import {Routes, Route, Link} from "react-router-dom";
import Header from "./Header/Header";
import MovieReadyToRender from "./Home/Movies/MovieReadyToRender";
import SeriesReadyToRender from "./Home/Series/SeriesReadyToRender";
import MovieDetails from "./Details/MovieDetails";
import SeriesDetails from "./Details/SeriesDetails";
import NotFound404 from "./NotFound/NotFound404";
import Footer from "./Footer/Footer";



function App() {
    return (
        <div>
            <Header/>


            <Routes>
                <Route path='/' exact element={<MovieReadyToRender/>}/>
                <Route path='/series' element={<SeriesReadyToRender/>}/>
                <Route path='MovieDetails/:imdbID' element={<MovieDetails/>}/>
                <Route path='/series/SeriesDetails/:imdbID' element={<SeriesDetails/>}/>
                <Route path='*' element={<NotFound404/>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

export default App;
