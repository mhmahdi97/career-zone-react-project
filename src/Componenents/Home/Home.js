import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategoriesContainer from '../JobCategoriesContainer/JobCategoriesContainer';
import FeaturedJobsContainer from '../FeaturedJobsContainer/FeaturedJobsContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoriesContainer></JobCategoriesContainer>
            <FeaturedJobsContainer></FeaturedJobsContainer>
        </div>
    );
};

export default Home;