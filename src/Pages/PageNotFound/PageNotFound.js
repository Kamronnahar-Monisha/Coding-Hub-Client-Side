import React from 'react';
import './PageNotFound.css';
import pageNotFoundImg from '../../images/404.svg';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const PageNotFound = () => {
    return (
        <div className="container">
            <div className='row justify-content-center align-items-center'>
                <div className="col-lg-5 text-center">
                    <img src={pageNotFoundImg} alt="page not found" />
                    <Link className='btn-custom rounded' to='/'>
                        <FaArrowLeft className='me-2'/>
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;