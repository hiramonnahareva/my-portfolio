import React from 'react';
import './Contact.css';
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactInfo from './ContactInfo';

const Contact = () => {
    const sendEmail = event => {
        event.preventDefault()
    emailjs.sendForm('service_kb5zotq', 'template_hx4vy36',event.target, 'QPsBNRpvFsbr7Kbf4' ).then(res => {
        toast.success("Wow! you are send massage successfully");
    })

    };

    return (
        <div className='contact-container'>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Contact;