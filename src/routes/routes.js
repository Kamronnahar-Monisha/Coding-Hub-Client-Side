import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";



 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/home",
          element:<Home></Home>,
        },
        {
          path:"/courses",
          element:<Courses></Courses>,
          loader:()=>{
            return fetch('http://localhost:5000/courses');
          }
        },
        {
          path:"/courses/:id",
          element:<CourseDetails></CourseDetails>,
          loader:async({params})=>{
            return fetch(`http://localhost:5000/courses/${params.id}`);
          }
        },
      ]
    },
  ]);