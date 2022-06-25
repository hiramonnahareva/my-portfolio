import React from 'react';
import './detail.css'

const Detail = ({detail}) => {
    const {img1, img2, img3, heading, details, href} = detail;
    return (
<div>
<h3 className='detail-head'>{heading}</h3>
        <div className='detail-container'>
            <div className="detail-thamb">
                <img src={img1} alt="" />
                </div>
            <p className='detail'>{details.home}</p>
            <div className="detail-thamb">
            <img src={img2} alt="" />
            </div>
            <p className='detail'>{details.deshboard}</p>
            <div className="detail-thamb">
            <img src={img3} alt="" />
            </div>
            <p className='detail'>{details.deshboard}</p>
        </div>
        <ul className='feature'>
        <h5 className='feature-heading'>Features</h5>
                <li>{details.one}</li>
                <li>{details.two}</li>
                <li>{details.three}</li>
            </ul>
            <p className='tachonology'>Technologies: {details.Technologies}</p>
            <button className='link detail-btn'><a href={href} target="_blank">Live</a></button>
</div>
        

    );
};

export default Detail;