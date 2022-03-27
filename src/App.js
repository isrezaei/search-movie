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
        color_header_sync_search : isDarkMood ? '#e5e5e5' : '#2c2c2c',
        color_Header_logo : isDarkMood ? 'white' : '#484848',
        color_search_component : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_search_select_innerText : isDarkMood ? '#212121' : '#fff',
        color_sidebar_active_icon : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_sidebar_disable_icon : isDarkMood ? '#6c7682' : '#989797',
        color_upper_slider_right_btn : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_upper_slider_right_btn_innerText : isDarkMood ? '#212121' : '#ffffff',
        color_upper_slider_left_btn : isDarkMood ? '#525763' : '#8a8a8a',
        color_upper_slider_left_btn_innerText : isDarkMood ? '#9ca0ab' : '#e5e4e4',
        color_upper_slider_welcome_text : isDarkMood ? '#9ca0ab' : '#9a9a9a',
        color_upper_slider_hr_line : isDarkMood ? '#424242' : '#cfcfcf',
        color_card_Year : isDarkMood ? '#8c8c8c' : '#a8a8a8',
        color_card_title : isDarkMood ? 'whitesmoke' : '#616161',
        color_top_section_search_result_text : isDarkMood ? '#bdbcbc' : '#616161',
        color_top_section_search_result_type : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_top_section_search_result_type_innerText : isDarkMood ? '#212121' : '#fff',
        color_top_section_search_result_hr_line : isDarkMood ? '#424242' : '#cfcfcf',
        color_top_section_search_result_your_search_text : isDarkMood ? '#9ca0ab' : '#9a9a9a',
        color_please_search_text : isDarkMood ? '#e0e0e0' : '#525252',
        color_please_search_text_strong : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',

        responsive : {
            small_mobile : '380px',
            medium_mobile : '480px',
            small_screen : '900px',
            medium_screen : '1024px',
            large_screen : '1200px'
        }
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
