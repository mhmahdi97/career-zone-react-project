import React from 'react';
import './JobDetails.css';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const jobData = useLoaderData();
    console.log(jobData)
    const {companyLogo, companyName, educationalRequirements, email, experiences, fulltimeOrParttime, id, jobDescription, jobResponsibility, jobTitle, location, phone, remoteOrOnsite, salary} = jobData;
    

    return (
        <div>
            <div className='banner-bg'></div>
            <div className='job-details-container'>
                <div className='job-description-container'>
                    <p><strong>Job Description: </strong>{jobDescription}.</p>
                    <p><strong>Job Responsibility: </strong>{jobResponsibility}.</p>
                    <p><strong>Educational Requirements: </strong>{educationalRequirements}.</p>
                    <p><strong>Experiences: </strong>{experiences}.</p>
                </div>
                <div className='job-details-card-container'>
                    <div className='job-details-card'>
                        <div className='job-description'>
                            <h4 className='job-details-title'>Job Details</h4>
                            <hr />
                            <p><strong>Salary: </strong>{salary}.</p>
                            <p><strong>Job Title: </strong>{jobTitle}.</p>
                        </div>

                        <div className='contact-information'>
                            <h4 className='job-details-title'>Contact Information</h4>
                            <hr />
                            <p><strong>Phone: </strong>{phone}.</p>
                            <p><strong>Email: </strong>{email}.</p>
                            <p><strong>Addres: </strong>{location}.</p>
                        </div>
                        
                        
                    </div>
                    <button></button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;