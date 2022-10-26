import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({course}) => {
    return (
        <div className='col-12'>
            <div className="course shadow-lg">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5">
                        <img className='w-100' src={course.img} alt={`logo of ${course.name}`} />
                    </div>
                    <div className="col-lg-7 py-4">
                        <h3 className='theme-color'>{course.name}</h3>
                        <p className='pe-4'>{course.description}</p>
                        <p className='fw-bolder text-muted m-0'>Instructor : {course.instructor}</p>
                        {/* <p className='fw-bolder text-muted m-0'>Total Enrolled: {course.enrolled} Students</p>
                        <p className='fw-bolder text-muted m-0'>Rating: <span className="theme-color">{course.rating}</span></p>
                        <p className='fw-bolder text-muted m-0'>Price: {course.price} taka only</p> */}
                        <Link className='btn-custom rounded d-inline-block mt-3' to={`/courses/${course.id}`}>Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;