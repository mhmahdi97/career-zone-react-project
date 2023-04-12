import React, { useEffect, useState } from 'react';
import Questions from '../Questions/Questions';

const Blog = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(()=>{
        fetch('questions.json')
        .then(res => res.json())
        .then (data => setQuestions(data))
    }, [])
    return (
        <div>
             {
                questions.map(question => <Questions
                question = {question}
                ></Questions>)
            }
        </div>
    );
};

export default Blog;