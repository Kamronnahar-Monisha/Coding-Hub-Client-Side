import React from 'react';
import './Login.css';
import signInImg from '../../../images/sign-in.svg';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const Login = () => {
    const {signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const handleGoogleSignIN = ()=>{
        signInWithGoogle()
           .then((result)=>{
                console.log(result.user);
           })
           .catch((error)=>{
                console.log(error.massage);
           })
    }

    const handleGithubSignIN = ()=>{
        signInWithGithub()
           .then((result)=>{
                console.log(result.user);
           })
           .catch((error)=>{
                console.log(error.massage);
           })
    }

    return (
        <div className='log-in my-5'>
            <div className="container">
                <div className="row justify-content-around align-items-center">
                    <div className="col-lg-5">
                        <img className="w-100" src={signInImg} alt="sign in" />
                    </div>
                    <div className="col-lg-5">
                        <div className='shadow-lg rounded p-5'>
                            <h3 className='theme-color fw-bolder'>Please Sign In !!</h3>
                            <form>
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
                                    <label className="form-check-label text-muted" htmlFor="exampleCheck1 ">Remember me</label>
                                </div>
                                <button type="submit" className="btn-custom rounded form-control">Sign In</button>
                            </form>
                            <div className='text-muted my-3 text-center'>
                                Don't have a account ? Please <Link to='/Register' className='text-decoration-none theme-color fw-bold'>Register</Link>
                            </div>
                            <button onClick={handleGoogleSignIN} type="submit" className="btn-custom-outline rounded form-control mb-3">Sign In with  <FaGoogle /></button>
                            <button onClick={handleGithubSignIN} type="submit" className="btn-custom-outline rounded form-control">Sign In with  <FaGithub /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;