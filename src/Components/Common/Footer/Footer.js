import React from 'react';
import './Foorte.css';
import { BsFacebook, BsTelephoneFill, BsTwitter, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-container'>
            <div className='footer-banner'>
                <div className="footer-info">
                    <h1 className='title'> DevEva </h1>
                    <h5>Home|About|Blogs|Contact</h5>
                   
                    <div>
                    </div>
                    <div className='contact'>
                        <h4><BsFacebook /> https://www.facebook.com</h4>
                        <h4><BsTelephoneFill /> +01799882200</h4>
                        <h4><BsLinkedin /> https://www.linkedin.com</h4>
                        <h4><BsTwitter /> https://www.twitter.com</h4>
                    </div>
                    {/* <div>
                        <h3> About The Company</h3>
                        <p>Infinity Group are one of  the leading IT Support Companies<br /> in the UK. Award Winning IT Support Company in the UK. </p>
                    </div> */}
                </div>
                <hr />
                <div className='icon'>
                    <span ><a href='https://www.facebook.com'><BsFacebook /></a></span> <span><a href='/'><BsTelephoneFill /></a> </span> <span><a href='https://www.instagram.com'>  <BsLinkedin /></a> </span> <span><a href='https://www.twitter.com'> <BsTwitter /></a></span>
                </div>
            <span className='copyright'>&copy; 2022 CatFoodDB</span>
            </div>
        </div>
        </div>
    );
};

export default Footer;