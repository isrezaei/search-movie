import {Routes, Route} from "react-router-dom";
import Header from "./Header/Header/Header";
import ResultHomeReadyToRender from "./Results/ResultForHome/ResultHomeReadyToRender";
import ResultMovieRender from "./Results/ResultSearchMovie/ResultMovieRender";
import ResultSeriesRender from "./Results/ResultSearchSeries/ResultSeriesRender";
import ResultFavoriteRender from "./Results/ResultFavorite/ResultFavoriteRender";
import ResultDetailsRender from "./Results/ResultDetails/ResultDetailsRender";
import NotFound404 from "./NotFound/NotFound404";
import Sidebar from "./Sidebar/Sidebar";
import styled, {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";
import {GlobalStyle} from "./GlobalStyle";
import React from "react";
import {ToastContainer} from 'react-toastify';


function App() {

    const isDarkMood = useSelector(state => state.DarkMoodSlice.darkMood)
    const ThemeProject = {
        background_project : isDarkMood ? '#000000' : '#eceff1',
        background_header : isDarkMood ? '#131313' : '#e0e0e0',
        background_sidebar : isDarkMood ? '#131313' : '#e0e0e0',
        background_scroll : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
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
        color_card_type :isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_card_type_innerText : isDarkMood ? '#212121' : '#fff',
        color_top_section_search_result_text : isDarkMood ? '#bdbcbc' : '#616161',
        color_top_section_search_result_type : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_top_section_search_result_type_innerText : isDarkMood ? '#212121' : '#fff',
        color_top_section_search_result_hr_line : isDarkMood ? '#424242' : '#cfcfcf',
        color_top_section_search_result_your_search_text : isDarkMood ? '#9ca0ab' : '#9a9a9a',
        color_please_search_text : isDarkMood ? '#e0e0e0' : '#525252',
        color_please_search_text_strong : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_NotFound_text : isDarkMood ? '#e0e0e0' : '#525252',
        color_NotFound_text_strong : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_Favorite_Title : isDarkMood ? '#e0e0e0' : '#525252',
        color_Details_Titles : isDarkMood ? '#e0e0e0' : '#525252',
        color_Details_Bag : isDarkMood ? 'rgb(33,33,33)' : 'rgb(218,218,218)',
        color_Details_Bag_InnerText : isDarkMood ? '#ababab' : '#525252',
        color_details_icons : isDarkMood ? '#20e28c' : 'rgb(235, 131, 7)',
        color_details_ticket_innerText : isDarkMood ? '#212121' : '#fff',

        responsive : {
            small_mobile : '320px',
            medium_mobile : '480px',
            large_mobile : '750px',
            small_screen : '900px',
            medium_screen : '1280px',
        }
    }

    const ToastNotify = styled(ToastContainer)`
      .Toastify__toast {
        background: ${isDarkMood ? '#131313' : '#e0e0e0'} ;
        color: ${isDarkMood ? '#e0e0e0' : '#131313'} ;
        font-weight: bold;
      }
    `
    return (
        <ThemeProvider theme={ThemeProject} >
            <GlobalStyle/>
            <Header/>
            <ToastNotify/>
            <Routes>
                <Route path='/' exact={true} element={<ResultHomeReadyToRender/>}/>
                <Route path='/search/movie'  element={<ResultMovieRender/>}/>
                <Route path='/search/series' element={<ResultSeriesRender/>}/>
                <Route path='/details/:imdbID' element={<ResultDetailsRender/>}/>
                <Route path='/favorite' element={<ResultFavoriteRender/>}/>
                <Route path='*' element={<NotFound404/>}/>
            </Routes>
            <Sidebar/>
        </ThemeProvider>
    )
}

export default App;
