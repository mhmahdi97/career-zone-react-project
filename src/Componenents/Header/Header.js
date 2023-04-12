import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to="/" className="brand-title">Career Zone</Link>
             <nav className='nav-list'>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
            </nav>
            <div className='btn-icon-container'>
                <div className='btn-container'>
                <button className='apply-btn'>Start Applying</button>
                </div>
                <div className='menu-icon'>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;