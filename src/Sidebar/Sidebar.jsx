
import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'
import DarkMoodControl from "./DarkMoodControl";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";
import {SidebarStyle , Icon } from "./SidebarStyle";


const Sidebar = () => {

    const [Active , SetActive] = useState('Home')

    return (

        <SidebarStyle>


            <Link to={'/'}  style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Home'}>
                    <Icon Name={'Home'} ActiveIcon={Active === 'Home'} onClick={() => SetActive('Home')}><HiHome/></Icon>
                </Animated>

            </Link>


            <Link to={'/search/movie'} style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Movie'}>
                    <Icon Name={'Movie'} ActiveIcon={Active === 'Movie'} onClick={() => SetActive('Movie')}><MdLocalMovies/></Icon>
                </Animated>
            </Link>

            <Link to={'/series'} style={{textDecoration : 'none'}}>
                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Series'}>
                    <Icon Name={'Series'} ActiveIcon={Active === 'Series'} onClick={() => SetActive('Series')}><RiMovie2Fill/></Icon>
                </Animated>
            </Link>

            <Icon><DarkMoodControl/></Icon>

        </SidebarStyle>
    );
};

export default Sidebar;