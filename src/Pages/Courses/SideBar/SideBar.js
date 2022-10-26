import React from 'react';
import CourseName from '../CourseName/CourseName';
import './SideBar.css';

const SideBar = ({courses}) => {
    return (
        <div className='side-bar p-5 rounded shadow-lg'>
            {
                courses.map(course=><CourseName key={course.id} course={course}></CourseName>)
            }
        </div>
    );
};

export default SideBar;