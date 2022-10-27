import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
    const course = useLoaderData();
    const handleCheckout = (event)=>{
        event.preventDefault();
        alert("You have successfully got the premium access!!");
    }
    return (
        <div className='Checkout my-5 container'>
            <div className="row justify-content-center align-items-center">
                <div className='col-lg-6 p-5 custom-shadow rounded'>
                    <h4 className='theme-color text-center'>Get Your Premium Access</h4>
                    <form onSubmit={handleCheckout} className='px-5 m-5'>
                        <h5 className='mt-5'>Enter Your Card Information</h5>
                        <div className="mb-3">
                            <label htmlFor="course-name" className="form-label text-muted">Course Name</label>
                            <input defaultValue={course?.name} type="txt" className="form-control" id="course-name" readOnly />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label text-muted">Course Price</label>
                            <input defaultValue={`${course?.price} taka only`} type="txt" className="form-control" id="price" readOnly />
                        </div>

                        <h5 className='mt-5'>Enter Your Card Information</h5>
                        <div className="mb-3">
                            <label htmlFor="card-number" className="form-label text-muted">Your Card Number</label>
                            <input type="txt" className="form-control" id="card-number" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Password" className="form-label text-muted">Password</label>
                            <input type="password" className="form-control" id="Password" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="verification-code" className="form-label text-muted">Verification Code</label>
                            <input type="txt" className="form-control" id="verification-code" required/>
                        </div>
                        <button type="submit" className="form-control btn-custom rounded">Checkout</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;