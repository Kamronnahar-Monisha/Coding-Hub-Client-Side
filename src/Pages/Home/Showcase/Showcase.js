import React from 'react';
import "./Showcase.css";
import showcaseImg from "../../../images/showcase-img.svg";
import { Link } from 'react-router-dom';

const Showcase = () => {
    return (
        <div className='showcase'>
            <div className="container">
                <div className="row justify-content-between align-items-center mb-5 mt-3">
                    <div className="col-lg-6">
                        <p className="fs-4 m-0 p-0">Let's make coding fun for you!</p>
                        <h1 className="fw-bolder"><span className='theme-color heading-highlight'>Experience</span> The</h1>
                        <h1 className="fw-bolder">Journey Of <span className='theme-color heading-highlight'>Programming</span></h1>
                        <h2 className="fw-bolder">Efficiently...</h2>
                        <p className='py-2 showcase-paragraph pe-3'>
                        We are providing many programming courses which will help you to improve your programming skill. Choose your desired course from our course list and start coding.
                        </p>
                        <Link to="/courses" className='btn-custom rounded'>Get Started</Link>
                    </div>
                    <div className="col-lg-6">
                        <img src={showcaseImg} alt="A boy is coding in laptop" className='w-100'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;