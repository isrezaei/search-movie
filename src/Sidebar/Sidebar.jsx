import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'
import DarkMoodControl from "./DarkMoodControl";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {SidebarStyle , Icon } from "./SidebarStyle";
import {ChangeActiveIcon} from "../Redux/ResultSearchSlice";
import {useDispatch} from "react-redux";
import {Animated} from "react-animated-css";
import React from "react";

const Sidebar = () => {


    const dispatch = useDispatch()

    const ActiveCategory = useSelector(state => state.ResultSearchSlice.activeCategory)

    // console.log(ActiveIconSidebar)

    const ActiveHome = ActiveCategory === 'Home'
    const ActiveMovie = ActiveCategory === 'Movie'
    const ActiveSeries = ActiveCategory === 'Series'


    const onSubmit = (IconName) =>
    {
        dispatch(ChangeActiveIcon(IconName))
        sessionStorage.setItem('IconName' , JSON.stringify(IconName))

    }


    return (

        <SidebarStyle>



            <Animated
                animationIn="tada"
                animateOnMount={ActiveHome}>
                <Link to={'/'}>
                    <Icon Name={'Home'} ActiveIcon={ActiveHome} onClick={()=> onSubmit('Home')}><HiHome/></Icon>
                </Link>
            </Animated>

            <Animated
                animationIn="tada"
                animateOnMount={ActiveMovie}>
                <Link to={'/search/movie'}>
                    <Icon Name={'Movie'} ActiveIcon={ActiveMovie} onClick={()=> onSubmit('Movie')}><MdLocalMovies/></Icon>
                </Link>
            </Animated>

            <Animated
                animationIn="tada"
                animateOnMount={ActiveSeries}>
                <Link to={'/search/series'}>
                    <Icon Name={'Series'} ActiveIcon={ActiveSeries} onClick={()=> onSubmit('Series')}><RiMovie2Fill/></Icon>
                </Link>

            </Animated>
            <Icon><DarkMoodControl/></Icon>

        </SidebarStyle>
    );
};

export default React.memo(Sidebar);