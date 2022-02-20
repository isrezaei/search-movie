import {Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div>
            <Header/>

            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='details/:imdbId' element={<Details/>}/>
                <Route path='*' element={<NotFound404/>}/>
            </Routes>

            <Footer/>
        </div>
    )
}

export default App;
