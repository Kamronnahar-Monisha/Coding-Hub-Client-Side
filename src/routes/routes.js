import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Checkout from "../Pages/CheckOut/Checkout";
import CourseDetails from "../Pages/CourseDetails/CourseDetails";
import Courses from "../Pages/Courses/Courses/Courses";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Shared/Login/Login";
import Register from "../Pages/Shared/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";



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
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/checkout/:id",
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader:async({params})=>{
            return fetch(`http://localhost:5000/courses/${params.id}`);
          }
        },
      ]
    },
  ]);