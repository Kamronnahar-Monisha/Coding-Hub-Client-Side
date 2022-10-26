import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css';

const CourseDetails = () => {
    const course = useLoaderData();
    console.log(course);
    return (
        <div>
            {course.name}
        </div>
    );
};

export default CourseDetails;