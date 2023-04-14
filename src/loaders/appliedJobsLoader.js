import { getAppliedJobs } from "../utilities/fakedb";

const appliedJobsLoader = async () => {
    const loadedJobs = await fetch('/jobsData.json')
    const jobs = await loadedJobs.json();
    
    const storedJobs = getAppliedJobs();
    const savedJobs = [];
    
    console.log(storedJobs);
    for (const id in storedJobs) {
        const addedJob = jobs.find(job => job.id == id)
        if (addedJob) {
            const quantity = storedJobs[id];
            addedJob.quantity = quantity;
            savedJobs.push(addedJob);
        }  
    }
    return savedJobs;
};


export default appliedJobsLoader;