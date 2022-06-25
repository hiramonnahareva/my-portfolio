import React, { useState } from 'react';
import CustomLink from './CustomLink';
import { FaTimes, FaBars} from 'react-icons/fa';

import './Header.css'


    
    

const Header = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <div>
            <div className="nav-container">
                <div className="logo">
                    <h1>EVA</h1>
                </div>
                {/* <div className="social">
                    <i></i>
                    <i></i>
                    <i></i>
                </div> */}
                <nav>
                    <ul  className={click ? 'menu-bar' : 'menu-display-none'}
                        onClick={() => setClick(true)}
                        >
                        <li><CustomLink to='/home'>Home</CustomLink></li>
                        <li><CustomLink to='/portfolio'>Portfolio</CustomLink></li>
                        <li><CustomLink to='/blogs'>Blogs</CustomLink></li>
                        <li><CustomLink to='/about'>About</CustomLink></li>
                        <li><CustomLink to='/contact'>Contact</CustomLink></li>
                    </ul>
                    <div className='menu-icon' onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                </nav>
            </div>
           
        </div>
    );
};

export default Header;