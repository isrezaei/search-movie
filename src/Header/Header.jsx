import './Header.scss'
import {BiSearchAlt} from "react-icons/bi";
import SwitchControl from "./SwitchControl";
import React from "react";


export const Header = () => {
    return (
        <div className='header'>

            {/*logo_search*/}
            <section className='logo_search'>
                <div className='logo'>MOV</div>
                <div className='search'>
                    <BiSearchAlt className='magnifier'/>
                    <input placeholder='Search something here...' type='text'/>
                </div>
            </section>

            {/*dark-control*/}
            <section className='dark-control'>
                <SwitchControl/>
            </section>

        </div>
    );
};

export default Header;