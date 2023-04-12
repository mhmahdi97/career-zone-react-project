import React, { useEffect, useState } from 'react';
import './JobCategoriesContainer.css';
import JobCategoryCard from '../JobCategoryCard/JobCategoryCard';

const JobCategoriesContainer = () => {
    const [categories, setCategories] = useState([]);
     
    useEffect(() =>{
        fetch('jobCategories.json')
        .then(res => res.json())
        .then (data => setCategories(data))
    }, [])
    
    return (
        <div className='catergory-details'>
            <h1>Job Category List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='category-cards-container'>
                {
                    categories.map(category => <JobCategoryCard
                    category = {category}
                    key={category.id}
                    ></JobCategoryCard>)
                }
            </div>
          
        </div>
    );
};

export default JobCategoriesContainer;