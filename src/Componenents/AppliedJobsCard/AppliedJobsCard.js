import React from 'react';
import './AppliedJobsCard.css';
import { Link } from 'react-router-dom';

const AppliedJobsCard = (props) => {
    console.log(props)
     const {companyLogo, companyName, educationalRequirements, email, experiences, fulltimeOrParttime, id, jobDescription, jobResponsibility, jobTitle, location, phone, remoteOrOnsite, salary} = props.job;
    return (
        <div className='applied-job'>
            <div className='company-logo-container'>
                <img src={companyLogo} alt="" />
            </div>
             
            <div className='job-details'>
                <p className='job-title'>{jobTitle}</p>
                <p className='company-name'>{companyName}</p>
                <div className='remote-fulltime-container'>
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
            </div>

            <Link to={`/job/${id}`}>
            <button className='btn-details'>View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJobsCard;