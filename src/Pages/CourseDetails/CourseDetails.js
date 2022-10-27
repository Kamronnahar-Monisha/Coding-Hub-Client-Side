import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
const CourseDetails = () => {
    const course = useLoaderData();
    return (
        <>
            <div className='course-details container'>
                <div className="row justify-content-center align-items-center shadow-lg my-5 mx-2 mx-lg-0">
                    <div className="col-lg-5">
                        <img className='w-100' src={course.img} alt={`logo of ${course?.name}`} />
                    </div>
                    <div className="col-lg-7 py-4 text-center text-lg-start">
                        <h3 className='theme-color'>
                            {course.name}
                        </h3>
                        <p className='pe-4'>{course.description}</p>
                        <p className='fw-bolder text-muted m-0'>Instructor : {course?.instructor}</p>
                        <p className='fw-bolder text-muted m-0'>Total Enrolled: {course?.enrolled} Students</p>
                        <p className='fw-bolder text-muted m-0'>Rating: <span className="theme-color">{course?.rating}</span></p>
                        <p className='fw-bolder text-muted m-0'>Price: {course?.price} taka only</p>
                        <Link className='btn-custom rounded d-inline-block mt-3' to={`/checkout/${course.id}`}>Get Premium Access--</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;