import React from 'react';
import image from '../../pexels-dima-valkov-9322329 (1) 1 (1).png';
import './About.css';

const About = () => {
    return (
        // <div>
        //     
        // </div>
        <div className='About-container'>
            <div className="About-info">
            <h1 className='heading'> I am Hiramon Nahar Eva.</h1>
            
            <p>I am Eva. My strong points are HTML(html5) expert, CSS(css3) expert, bootstrap, responsive web design, React, and Javascript. </p>

<p> My skills:
Frontend - 
 Html, Css, Tailwind, Bootstrap, Java Script, Es6, React Js
 </p>
<p>Backend - 
Node Js , Express Js ,Mongodb ,Firebase
</p>
<p>
Tools:
 Vs Code , Github , Stack Overflow Netlify Figma.
 </p>

<span>I will provide you with the best quality and trust-able work.</span>
<br />
             <button className='pro-btn'><a href="https://drive.google.com/file/d/1EUozhcJsY4tJkAOQufDRuzOqWFb53mWU/view" target="_blank" >Resume</a></button>
            </div>
            <div className="About-thamb">
                <img className='About-img' src={image} alt="" />
            </div>
        </div>
    );
};

export default About;