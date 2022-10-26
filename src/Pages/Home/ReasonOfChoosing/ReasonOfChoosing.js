import React from 'react';
import "./ReasonOfChoosing.css";
import ReasonOfChoosingImg from '../../../images/reason-of-choosing.svg';
import support from '../../../images/support.svg';
import job from '../../../images/job.svg';
import video from '../../../images/vedio.svg';

const ReasonOfChoosing = () => {
    return (
        <div className='Reason-of-choosing my-5 py-5'>
            <div className="Reason-of-choosing-heading text-center">
                <img width="200" src={ReasonOfChoosingImg} alt="a girl thinking why she will choose "/>
                <h1>Why you will <span className="theme-color"> choose</span> us ?</h1>
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center my-5">
                    <div className="col-lg-4">
                        <div className='rounded p-5 shadow-lg text-center'>
                            <img width="130" src={support} alt="recorded video" />
                            <h4 className='theme-color pt-4'>24/7 support team</h4>
                            <p>We have a very friendly support team . Our support team member will always be there for you could not understand any topic of our courses.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='rounded p-5 shadow-lg text-center'>
                            <img width="150" src={job} alt="recorded video" />
                            <h4 className='theme-color pt-4'>Job Preparation Help</h4>
                            <p>We will help you to prepare for your software sector jobs. we will also recommend your cv to various company that will help you for interviews.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className='rounded p-5 shadow-lg text-center'>
                            <img width="170" src={video} alt="recorded video" />
                            <h4 className='theme-color pt-4'>Pre-recorded Class</h4>
                            <p>We will provide you pre-recorded class so that you can have your class whenever you are free.It will help you to see your classes many time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReasonOfChoosing;