import React from 'react';
import './AppliedJobs.css'
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import AppliedJobsCard from '../AppliedJobsCard/AppliedJobsCard';

const AppliedJobs = () => {
    const savedJobs = useLoaderData();
    const [jobs, setJobs] = useState(savedJobs);

    let [filter, setFilter] = useState('all');

    const handleFilterRemote = () => {
        setFilter('remote')
    }
    const handleFilterFullTime = () => {
        setFilter('fullTime')
    }
    const handleFilterReset = () => {
        setFilter('all')
    }

    const remoteJobs = jobs.filter(job => job.remoteOrOnsite == 'Remote')
    const fullTimeJobs = jobs.filter(job => job.fulltimeOrParttime == 'Full-time')

    let showJobs = jobs.map(job => <AppliedJobsCard
                    key={job.id}
                    job = {job}
                    ></AppliedJobsCard>)

    if (filter === 'remote') {
        showJobs = remoteJobs.map(job => <AppliedJobsCard
                    key={job.id}
                    job = {job}
                    ></AppliedJobsCard>)
    }

    else if(filter === 'fullTime'){
        showJobs = fullTimeJobs.map(job => <AppliedJobsCard
                    key={job.id}
                    job = {job}
                    ></AppliedJobsCard>)
    }

    return (

        <div>
            <div className='banner-bg'></div>
            <div className='applied-jobs-cards-container'>
                <div className='filter-btn-container'>
                    <button onClick={handleFilterRemote}>Filter by Remote</button>
                    <button onClick={handleFilterFullTime}>Filter by Full-time</button>
                    <button onClick={handleFilterReset}>Reset Filter</button>
                </div>
                {/* {
                    jobs.map(job => <AppliedJobsCard
                    key={job.id}
                    job = {job}
                    ></AppliedJobsCard>)
                } */}
                {showJobs}
            </div>
        </div>
    );
};

export default AppliedJobs;