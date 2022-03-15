import {Routes, Route} from "react-router-dom";
import Header from "./Header/Header/Header";
import ResultHomeReadyToRender from "./Home/ResultForHome/ResultHomeReadyToRender";
import ResultMovieRender from "./Home/ResultSearchMovie/ResultMovieRender";
import ResultSeriesRender from "./Home/ResultSearchSeries/ResultSeriesRender";
import Details from "./Details/Details";
import NotFound404 from "./NotFound/NotFound404";
import Sidebar from "./Sidebar/Sidebar";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {GlobalStyle} from "./GlobalStyle";
import React from "react";


function App() {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)

    const ThemeProject = {

        background_project : isDarkMood ? '#253240' : '#eceff1',
        background_header : isDarkMood ? '#1b2634' : '#e0e0e0',
        background_sidebar : isDarkMood ? '#3b4856' : '#e0e0e0',
        color_logo : isDarkMood ? 'white' : '#484848',
        color_search_component : isDarkMood ? 'lightseagreen' : 'rgb(235, 131, 7)',
        color_sidebar_active_icon : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_sidebar_disable_icon : isDarkMood ? '#6c7682' : '#bdbdbd',
        color_upper_slider_right_btn : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_upper_slider_right_btn_innerText : isDarkMood ? '#212121' : '#ffffff',
        color_upper_slider_left_btn : isDarkMood ? '#525763' : '#8a8a8a',
        color_upper_slider_left_btn_innerText : isDarkMood ? '#9ca0ab' : '#e5e4e4',
        color_upper_slider_welcome_text : isDarkMood ? '#9ca0ab' : '#9a9a9a',
        color_upper_slider_hr_line : isDarkMood ? '#424242' : '#cfcfcf',


    }







    return (
        <ThemeProvider theme={ThemeProject} >
            <GlobalStyle/>
            <Header/>
            <Routes>
                <Route path='/' exact element={<ResultHomeReadyToRender/>}/>
                <Route path='/search/movie'  element={<ResultMovieRender/>}/>
                <Route path='/search/series' element={<ResultSeriesRender/>}/>
                <Route path='Details/:imdbID' element={<Details/>}/>
                <Route path='*' element={<NotFound404/>}/>
            </Routes>
            <Sidebar/>
        </ThemeProvider>
    )
}

export default App;
