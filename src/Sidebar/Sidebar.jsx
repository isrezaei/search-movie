import styled from "styled-components";
import { MdLocalMovies } from 'react-icons/md';
import { RiMovie2Fill } from 'react-icons/ri';
import {HiHome} from 'react-icons/hi'
import HeaderDMControl from "../Header/HeaderDMControl/HeaderDMControl";
import {useState} from "react";
import {Link} from "react-router-dom";
import {Animated} from "react-animated-css";



const Sidebar = () => {

    const [Active , SetActive] = useState('Home')


    const FooterStyle = styled.div`
      width: 4%;
      height: 60vw;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background:#3b4856;
      position: absolute;
      top: 4vw;
      left: 0;

    `

    const AdjustIcon = styled.span`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      height: 3vw;
      margin-top: 1.5vw;
      font-size: 1.8vw;
      cursor: pointer;
      transition: .5s ease-in-out;
     
    `

    const Icon = styled(AdjustIcon) `
      color: ${({ActiveIcon})=> ActiveIcon  ? '#20e28c' : '#6c7682'};
      &:after
      {
        height: 1vw;
        content: '${({Name})=> Name}';
        display: ${({ActiveIcon})=> ActiveIcon ? 'block' : 'none'};;
        font-size: .65vw;
      }
    `


    return (
        <FooterStyle >


            <Link to={'/'} >
                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Home'}
                >
                    <Icon Name={'Home'} ActiveIcon={Active === 'Home'} onClick={() => SetActive('Home')}><HiHome/></Icon>
                </Animated>

            </Link>


                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Movie'}
                >

                    <Icon Name={'Movie'} ActiveIcon={Active === 'Movie'} onClick={() => SetActive('Movie')}><MdLocalMovies/></Icon>
                </Animated>



            <Link to={'/series'}>
                <Animated
                    animationIn="tada"
                    animateOnMount={Active === 'Series'}
                >
                    <Icon Name={'Series'} ActiveIcon={Active === 'Series'} onClick={() => SetActive('Series')}><RiMovie2Fill/></Icon>
                </Animated>
            </Link>

            {/*<div><HeaderDMControl/></div>*/}


        </FooterStyle>
    );
};

export default Sidebar;