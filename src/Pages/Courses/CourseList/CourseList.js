import React from 'react';
import Course from '../Course/Course';
import './CourseList.css';

const CourseList = ({courses}) => {
    return (
        <div className='course-list'>
          <div className="row g-5">
            {
                courses.map(course=><Course key={course.id} course={course}></Course>)
            }
          </div>   
        </div>
    );
};

export default CourseList;