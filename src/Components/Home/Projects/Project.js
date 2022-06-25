import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({project}) => {
    const {img, heading, descripting, href, id} = project;
    return (
        <div className='project-container'>
           
        {/* <button className='btn'><a href="https://spice-warehouse.firebaseapp.com/" target="_blank" >Resume</a></button> */}
        <div className='project-thmb'>
        <img src={img} className='' alt="" />
        </div>
        <div className="pro-info">
            <h3>{heading}</h3>
            <p>{descripting}</p>
            <button className='btn pro-btn'><a href={href} target="_blank">Link</a></button>
            <Link to={`/details`} className='pro-btn'>Details</Link>

        </div>
    </div>
    );
};

export default Project;