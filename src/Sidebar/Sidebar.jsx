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

const Sidebar = () => {




    const dispatch = useDispatch()

    const ActiveIconMove = useSelector(state => state.ResultSearchSlice.activeIconMove)

    const ActiveHome = ActiveIconMove === 'Home'
    const ActiveMovie = ActiveIconMove === 'Movie'
    const ActiveSeries = ActiveIconMove === 'Series'


    console.log(ActiveHome)



    return (

        <SidebarStyle>


            <Link to={'/'}  style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={ActiveHome}>
                    <Icon Name={'Home'} ActiveIcon={ActiveHome} onClick={()=> dispatch(ChangeActiveIcon('Home'))}><HiHome/></Icon>
                </Animated>
            </Link>


            <Link to={'/search/movie'} style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={ActiveMovie}>
                    <Icon Name={'Movie'} ActiveIcon={ActiveMovie} onClick={()=> dispatch(ChangeActiveIcon('Movie'))}><MdLocalMovies/></Icon>
                </Animated>
            </Link>

            <Link to={'/search/series'} style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={ActiveSeries}>
                    <Icon Name={'Series'} ActiveIcon={ActiveSeries} onClick={()=> dispatch(ChangeActiveIcon('Series'))}><RiMovie2Fill/></Icon>
                </Animated>
            </Link>

            <Icon><DarkMoodControl/></Icon>

        </SidebarStyle>
    );
};

export default Sidebar;