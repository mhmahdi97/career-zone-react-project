import React from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import JobCategoriesContainer from '../JobCategoriesContainer/JobCategoriesContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCategoriesContainer></JobCategoriesContainer>
        </div>
    );
};

export default Home;