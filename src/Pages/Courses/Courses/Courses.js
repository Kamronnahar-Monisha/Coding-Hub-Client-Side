import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseList from '../CourseList/CourseList';
import SideBar from '../SideBar/SideBar';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='my-5'>
           <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4">
                        <SideBar courses={courses}></SideBar>
                    </div>
                    <div className="col-lg-8">
                        <CourseList courses={courses}></CourseList>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Courses;