import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './CourseDetails.css';
import Pdf from "react-to-pdf";
import { FaFilePdf } from 'react-icons/fa';

const ref = React.createRef();

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
                        <div ref={ref}>
                            <h3 className='theme-color'>
                                {course.name}
                            </h3>
                            <p className='pe-4'>{course.description}</p>
                            <p className='fw-bolder text-muted m-0'>Instructor : {course?.instructor}</p>
                            <p className='fw-bolder text-muted m-0'>Total Enrolled: {course?.enrolled} Students</p>
                            <p className='fw-bolder text-muted m-0'>Rating: <span className="theme-color">{course?.rating}</span></p>
                            <p className='fw-bolder text-muted m-0'>Price: {course?.price} taka only</p>
                        </div>
                        <Link className='btn-custom rounded d-inline-block mt-3' to={`/checkout/${course.id}`}>Get Premium Access--</Link>
                        <Pdf targetRef={ref} filename="course.pdf">
                            {({ toPdf }) => <button onClick={toPdf} className="btn-custom-outline ms-3 rounded mt-3 mt-lg-0">
                                Download PDF
                                <FaFilePdf className='ms-2'></FaFilePdf>
                                </button>}
                        </Pdf>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetails;