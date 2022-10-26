import React from 'react';
import "./Footer.css";
import logo from '../../../images/logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer text-center py-5 mt-5'>
            <Link to="/home" className='text-decoration-none'>
                <img width="80" src={logo} alt="logo of coding hub website" />
                <span className='fs-2 fw-bold website-name ms-2'>Coding Hub</span>
            </Link>
            <p className='text-white'>Copyright © 2022. Kamronnahar Monisha.</p>
        </div>
    );
};

export default Footer;