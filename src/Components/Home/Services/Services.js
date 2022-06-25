import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import {TbBrandJavascript, TbBrandHtml5 } from 'react-icons/tb';
import ServiceBanner from './ServiceBanner';
import './Services.css';
// import {BsAlarm} from 'react-icons/bs';

const Services = () => {
    return (
       <div>
        <ServiceBanner></ServiceBanner>
        <div className='service-info'>
        <h2 className='service-header'>Services</h2>
        <div className="cards">
        <div className="card">
          <div className="card-info">
            <span className='icon'><TbBrandJavascript/></span>
            <h3>Javascript</h3>
          <span className='card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed magni architecto mollitia neque.</span>
          </div>
        </div>
        <div className="card">
        <div className="card-info">
        <span className='icon'><RiReactjsLine/></span>
         <h3>React</h3>
          <span className='card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed magni architecto mollitia neque.</span>
          </div>
        </div>
        <div className="card">
        <div className="card-info">
        <span className='icon'><TbBrandHtml5/></span>
         <h3>HTML</h3>
          <span className='card-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, sed magni architecto mollitia neque.</span>
          </div>
        </div>
        </div>
        </div>
       </div>
    );
};

export default Services;