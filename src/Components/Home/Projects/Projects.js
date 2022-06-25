import React from 'react';
import image1 from '../../../Screenshot 2022-06-09 184252 1 (1).png';
import image2 from '../../../Screenshot 2022-06-09 184252 2.png';
import image3 from '../../../Screenshot 2022-06-09 184252 3.png';
import image4 from '../../../Images/catBanner.png';
import Project from './Project';
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            id:1,
             img: image2,
              heading: 'PARTS',
              descripting: 'This home page is responsive. This Website is made for manufacturing industries. If Consumer purchases here any products he or she must be login into this site. I Implemented firebase Authentication for login. To build this website I use Tailwind CSS and daisyUI components.', 
              href: 'https://parts-manufacturer.web.app/'
            },
        {
            id:2, 
            img: image1,
            heading: 'STAR ANISE', 
            descripting: 'This website has been make for stock spice.I used tailwind css framework, react router dom, node js, mongodb atlas and authenticate by firebase to make this website.', 
            href:'https://spice-warehouse.firebaseapp.com/'
    },
        {id:3, 
            img: image3, 
            heading: 'DENTIST', 
            descripting: 'This home page is responsive. This Website is made for Dental care centers. Any patient can booking appoint for his or her treatment and contact our Dentist by massage but I had not implemented this now. I Implemented firebase Authentication for login. To build this website I used plain CSS.', 
            href: 'https://assignment-10-9be48.web.app/'
        },
        {id:4, 
            img: image4, 
            heading: 'Cat Food Review',
            descripting: 'This is a responsive project. this website is made for product reviews. I implemented charts into the dashboard. To build this project I used the vanilla CSS project.', 
            href: 'https://elegant-melba-17c1b9.netlify.app/'
        },
    ]
    return (
        <div className='projects-container'>
            <h2 >Projects</h2>
       {
           projects.map(project => <Project key={project.id} project={project}></Project>)
       } 
        </div>
    );
};

export default Projects;