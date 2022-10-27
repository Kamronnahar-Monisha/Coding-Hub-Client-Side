import React from 'react';
import './Register.css';
import registerImg from '../../../images/register.svg';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='register my-5'>
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-lg-5">
                        <img className="w-100" src={registerImg} alt="sign in" />
                    </div>
                    <div className="col-lg-5">
                        <div className='shadow-lg rounded p-5'>
                            <h3 className='theme-color fw-bolder'>Please Register Your Account !!</h3>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-muted fw-bold">Full Name</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-muted fw-bold"> Photo URL</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-muted fw-bold">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label text-muted fw-bold">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" required />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                                    <label className="form-check-label text-muted" htmlFor="exampleCheck1 ">Accept term and condition</label>
                                </div>
                                <button type="submit" className="btn-custom rounded form-control">Sign In</button>
                            </form>
                            <div className='text-muted my-3 text-center'>
                                Already have an account ? Please <Link to='/login' className='text-decoration-none theme-color fw-bold'>log IN</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;