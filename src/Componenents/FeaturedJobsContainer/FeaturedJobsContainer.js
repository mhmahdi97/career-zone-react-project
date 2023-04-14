import React, { useEffect, useState } from 'react';
import './FeaturedJobsContainer.css';
import FeaturedJobCard from '../FeaturedJobCard/FeaturedJobCard';

const FeaturedJobsContainer = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() =>{
        fetch('jobsData.json')
        .then(res => res.json())
        .then (data => setJobs(data))
    }, [])

    const handleShowAll = () => {
        setShowAll(!showAll)
    }

    

    return (
        <div className='featured-jobs-container'>
            <h2>Featured Jobs</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>   

            <div className='jobs-cards-container'>
                {
                    jobs.slice(0, showAll ? 6 : 4).map(job => <FeaturedJobCard
                    key={job.id}
                    job = {job}
                    ></FeaturedJobCard>)
                }

            </div> 
            <button className='btn-show-all' onClick={handleShowAll}>{showAll ? 'See Less Jobs' : 'See All Jobs'}</button>
        </div>

    );
};

export default FeaturedJobsContainer;