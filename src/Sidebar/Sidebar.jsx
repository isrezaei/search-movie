import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill} from 'react-icons/ri';
import {GoListUnordered} from 'react-icons/go'
import {HiHome} from 'react-icons/hi'
import DarkMoodControl from "./DarkMoodControl";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {SidebarStyle, Icon, FavoriteBag} from "./SidebarStyle";
import {selectFavoriteId} from "../Redux/FavoriteSlice";
import {ChangeActiveIcon} from "../Redux/ResultSearchSlice";
import {useDispatch} from "react-redux";
import {Animated} from "react-animated-css";
import {useLocation} from "react-router-dom";
import React from "react";


const Sidebar = () => {

    const dispatch = useDispatch()
    const Location = useLocation().pathname
    const ActiveCategory = useSelector(state => state.ResultSearchSlice.activeCategory)
    const LengthFavorite = useSelector(selectFavoriteId).length

    const ActiveHome = ActiveCategory === 'home' || Location === '/'
    const ActiveMovie = ActiveCategory === 'movie' || Location === '/search/movie'
    const ActiveSeries = ActiveCategory === 'series' || Location === '/search/series'
    const ActiveFavorite = ActiveCategory === 'favorite' || Location === '/favorite'

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
                    <Icon Name={'Home'} ActiveIcon={ActiveHome} onClick={()=> onSubmit('home')}><HiHome/></Icon>
                </Link>
            </Animated>

            <Animated
                animationIn="tada"
                animateOnMount={ActiveMovie}>
                <Link to={'/search/movie'}>
                    <Icon Name={'Movie'} ActiveIcon={ActiveMovie} onClick={()=> onSubmit('movie')}><MdLocalMovies/></Icon>
                </Link>
            </Animated>

            <Animated
                animationIn="tada"
                animateOnMount={ActiveSeries}>
                <Link to={'/search/series'}>
                    <Icon Name={'Series'} ActiveIcon={ActiveSeries} onClick={()=> onSubmit('series')}><RiMovie2Fill/></Icon>
                </Link>
            </Animated>

            <Animated
                animationIn="tada"
                animateOnMount={ActiveFavorite}>
                <Link to={'/favorite'}>
                    <Icon Name={'Favorite'} ActiveIcon={ActiveFavorite} onClick={()=> onSubmit('favorite')}>
                        <GoListUnordered/>
                    </Icon>
                </Link>
            </Animated>

            {LengthFavorite ? <FavoriteBag>{LengthFavorite}</FavoriteBag> : null}
            <Icon><DarkMoodControl/></Icon>
        </SidebarStyle>
    );
};

export default React.memo(Sidebar);