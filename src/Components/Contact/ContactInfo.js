import React from 'react';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactInfo = () => {
    const sendEmail = event => {
        event.preventDefault()
    emailjs.sendForm('service_kb5zotq', 'template_hx4vy36',event.target, 'QPsBNRpvFsbr7Kbf4' ).then(res => {
        // console.log(true);
        toast.success("Wow! you are send massage successfully")
        // if(res.status){
        //     toast.success("Wow! you are send massage successfully")
        // }
        // else{
        //     return toast.success("Something is wrong")
        // }
    })

    };
    return (
        <div className='contact-info'>
        <h2>Contact Form</h2>
       
        <form className='form-container' onSubmit={sendEmail}>
            <div className='input-field'>
            <label>Name</label>
            <input type="text" name="name" placeholder='Your Name' required/>
            <label>Email</label>
            <input type="email" name="user_email" placeholder='Your Email' required/>
            </div>
            <br />
            <div className="textarea">
            <label>Massgae</label>
            <br />
            <textarea name="message" id="" cols="65" rows="10" placeholder='Your Massage' required></textarea>
            </div>
            <input className='input-btn' type="submit" value='send'></input>
        </form>
        <ToastContainer/>
        </div>
    );
};

export default ContactInfo;