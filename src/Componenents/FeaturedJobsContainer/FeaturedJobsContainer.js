import React, { useEffect, useState } from 'react';
import './FeaturedJobsContainer.css';
import FeaturedJobCard from '../FeaturedJobCard/FeaturedJobCard';

const FeaturedJobsContainer = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() =>{
        fetch('jobsData.json')
        .then(res => res.json())
        .then (data => setJobs(data))
    }, [])

    

    return (
        <div className='featured-jobs-container'>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>   

            <div className='jobs-cards-container'>
                {
                    jobs.map(job => <FeaturedJobCard
                    key={job.id}
                    job = {job}
                    ></FeaturedJobCard>)
                }
            </div> 
        </div>

    );
};

export default FeaturedJobsContainer;