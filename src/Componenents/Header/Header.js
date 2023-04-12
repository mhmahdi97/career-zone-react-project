import React, { useState } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [open, setOpen] = useState(false);
    
    const handleIcon = () => {
        setOpen(!open)
    }

    return (
        <div className='header'>
            <Link to="/" className="brand-title">Career Zone</Link>
             <nav className={open === false ? 'nav-list' : 'nav-list open'}>
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied-jobs">Applied Jobs</Link>
            <Link to="/blogs">Blog</Link>
            <button className='apply-btn'>Start Applying</button>
            <div className='btn-container'>
            </div>
            </nav>
            <div onClick={handleIcon} className='menu-icon'>
                    <span>
                        {
                            open === true ? <FontAwesomeIcon icon={faX} /> 
                            : <FontAwesomeIcon icon={faBars} />
                        }
                    </span>
            </div>
            {/* <div className='btn-icon-container'>
                
            </div> */}
        </div>
    );
};

export default Header;