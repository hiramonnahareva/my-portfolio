import React from 'react';
import './Banner.css';
import image from '../../pexels-dima-valkov-9322329 (1) 1 (1).png';

const Banner = () => {
    return (
        <div className='container'>
            <div className="info">
            <h1 className='heading'>Hello, I am Eva <small>Web Developer</small> </h1>
            
            <p className='banner-des'>Welcome To My Website. Your happyness is my hope.</p>
             <button className='btn'><a href="https://drive.google.com/file/d/1EUozhcJsY4tJkAOQufDRuzOqWFb53mWU/view" target="_blank" >Resume</a></button>
            </div>
            <div className="thamb">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Banner;