import React from 'react';
import { Link } from 'react-router-dom';
import './CourseName.css';

const CourseName = ({course}) => {
    return (
        <Link className='text-decoration-none text-dark'>
            <div className='course-name p-3 my-3 rounded fw-bold'>
                {course.name}
            </div>
        </Link>
    );
};

export default CourseName;