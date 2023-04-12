import React from 'react';
import './FeaturedJobCard.css';
import { Link } from 'react-router-dom';

const FeaturedJobCard = (props) => {
    const {companyLogo, companyName, educationalRequirements, email, experiences, fulltimeOrParttime, id, jobDescription, jobResponsibility, jobTitle, location, phone, remoteOrOnsite, salary} = props.job;
    console.log(props.job)
    return (
        <div className='job-card'>
            <div className='card-logo-container'>
                <img src={companyLogo} alt="" />
            </div>
            <h4>{jobTitle}</h4>
            <p>{companyName}</p>
            <div className='btn-container'>
                <button>{remoteOrOnsite}</button>
                <button>{fulltimeOrParttime}</button>
            </div>
            <div className='location-salary-container'>
                <div className='location-container'>
                    <img src="https://i.ibb.co/9brmJqp/Location-Icon.png" alt="" />
                    <span>{location}</span>
                </div>
                <span>Salary: {salary}</span>
            </div>
            <Link to={`/job/${id}`}>
                <button className='btn-details'>View Details</button>
            </Link>
        </div>
    );
};

export default FeaturedJobCard;