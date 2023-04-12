import React from 'react';
import './Main.css';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='main'>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;