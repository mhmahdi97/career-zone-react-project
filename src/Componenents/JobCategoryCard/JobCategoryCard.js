import React from 'react';
import './JobCategoryCard.css';

const JobCategoryCard = (props) => {
    const {jobCategory, availableJobs, categoryImg} = props.category;
    
    return (
        <div className='category-card'>
            <div className='category-img-container'>
                <img src={categoryImg} alt="" />
            </div>
            <h4>{jobCategory}</h4>
            <p>{availableJobs}</p>
        </div>
    );
};

export default JobCategoryCard;