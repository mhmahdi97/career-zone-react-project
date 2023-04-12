import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text-container'>
                <h1 className='banner-title'>One Step <br /> Closer To Your <br /> <span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-get-started'>Get Started</button>
            </div>
            <div className='banner-img-container'>
                <img src="https://i.ibb.co/vXQ6bSn/P3-OLGJ1copy1.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;