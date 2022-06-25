import React, { useEffect, useState } from 'react';
import partsHome from '../../Images/Screenshot 2022-06-10 134822 3.png';
import partsDashboard from '../../Images/Screenshot 2022-06-10 134314 1 (1).png';
import PartsSignup from '../../Images/Screenshot 2022-06-10 135031 1 (1).png';
import partsReview from '../../Images/Screenshot 2022-06-10 133811 1 (2).png';
import spiceBanner from '../../Images/Screenshot 2022-06-10 134822 9.png';
import spiceReview from '../../Images/Screenshot 2022-06-10 134822 1 (2).png';
import spiceLogin from '../../Images/Screenshot 2022-06-10 134916 1 (2).png';
import dentalBanner from '../../Images/Screenshot 2022-06-10 134822 7.png';
import dentalServices from '../../Images/Screenshot 2022-06-10 134822 2.png';
import dentalLogin from '../../Images/Screenshot 2022-06-10 134822 5.png';
import catBanner from '../../Images/Screenshot 2022-06-10 134502 1 (2).png';
import catseReview from '../../Images/Screenshot 2022-06-10 134822 8.png';
import catDashbaord from '../../Images/Screenshot 2022-06-10 134558 2 (1).png';
import { useParams} from "react-router-dom";
import Detail from './Detail';

const Details = () => {
   const detail = [
    {
        id:1,
         img1: partsHome,
         img2: partsDashboard,
         img3: partsReview,
         img4: PartsSignup,
          heading: 'PARTS', 
          details: {
            home: 'This home page is responsive. This Website is made for manufacturing industries. If Consumer purchases here any products he or she must be login into this site. I Implemented firebase Authentication for login. To build this website I used Tailwind CSS and daisyUI components.',
            deshboard: "The dashboard will be seen who are already logged in. But if you want to visit manage order, add product, and add item page you must log in like this email:'phHero@gmail.com' & password: 'testAdmin@123.",
           one: 'Full-stack project',
            two:'Implement user login, Admin panel, Dashboard etc.',
            three: 'Responsive homepage.',
            Technologies: ' Tailwind, DaisyUi , ReactHookForm, React js, Firebase for authentication and hosting, MongoDB, render server hosting site',
          },
          descripting: 'This is the Computer Parts Manufacturer Website.This is a Full-stack project', 
          href: 'https://parts-manufacturer.web.app/'
        },
    {
        id:2, 
        img1: spiceBanner,
        img2: spiceReview,
        img3: spiceLogin,
        heading: 'STAR ANISE', 
        details: {
            home: 'This website has been make for stock spice.I used tailwind css framework, react router dom, node js, mongodb atlas and authenticate by firebase to make this website.',
            deshboard:"Rating scales are used in performance management systems to indicate an employee's level of performance or achievement. These scales are commonly used because they provide quantitative assessments, are relatively easy to administer and assist in differentiating between employees.",
            one: 'Full-stack project',
             two:'Implement user login, Admin panel, Dashboard etc.',
             three: 'Responsive homepage.',
             Technologies: ' Tailwind, DaisyUi , ReactHookForm, React js, Firebase for authentication and hosting, MongoDB, render server hosting site',
           },
        descripting: 'This is a Spice Warehouse website.This is a Full-stack project', 
        href:'https://spice-warehouse.firebaseapp.com/'
},
    {id:3, 
        img1: dentalBanner, 
        img2: dentalServices,
        img3: dentalLogin,
        heading: 'DENTIST', 
        details: {
            home: 'This home page is responsive. This Website is made for Dental care centers. Any patient can booking appoint for his or her treatment and contact our Dentist by massage but I had not implemented this now. I Implemented firebase Authentication for login. To build this website I used plain CSS.',
            deshboard: "level of performance or achievement. These scales are commonly used because they provide quantitative assessments, are relatively easy to administer and assist in differentiating between employees.",
            one: 'Frontend project',
             two:'Implement user login, Admin panel, Dashboard etc.',
             three: 'Responsive homepage.',
             Technologies: ' Tailwind, DaisyUi , ReactHookForm, React js, Firebase for authentication and hosting, MongoDB, render server hosting site',
           },
        descripting: 'This is a Teeth Removal Website.Just Front-End intigration', 
        href: 'https://assignment-10-9be48.web.app/'
    },
    {id: 4, 
        img1: catBanner, 
        img2: catseReview,
        img3: catDashbaord,

        heading: 'Cat Food Review',
        details: {
            home: 'This is a responsive project. this website is made for product reviews. I implemented charts into the dashboard. To build this project I used the vanilla CSS project.',
            deshboard: "Rating scales are used in performance management systems to indicate an employee's level of performance or achievement. These scales are commonly used because they provide quantitative assessments, are relatively easy to administer and assist in differentiating between employees.",
            one: 'Frontend project',
             two:'Implement charts into the dashboard.',
             three: 'Responsive homepage.',
             Technologies: ' Tailwind, DaisyUi , ReactHookForm, React js, Firebase for authentication and hosting, MongoDB, render server hosting site',
           }, 
        descripting: 'This is a Product Review Website Just Front-End intigration', 
        href: 'https://elegant-melba-17c1b9.netlify.app/'
    },
   ]
   console.log(detail)
    return (
        <div className='details-container'>
            <h2 className='details-heading'>All Details</h2>
            {
                detail.map(detail => <Detail detail={detail}></Detail>)
            }
        </div>
    );
};

export default Details;