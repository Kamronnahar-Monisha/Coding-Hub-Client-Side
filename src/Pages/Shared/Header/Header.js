import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo.svg";
import "./Header.css";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';


const Header = () => {
    const [theme, setTheme] = useState(false);
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to="/home">
                        <img width="80" src={logo} alt="logo of coding hub website" />
                        <span className='fs-2 fw-bold website-name ms-2'>Coding Hub</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-lg-0">
                            <li className="nav-item ms-3">
                                <Link className="nav-link fw-bold" to="/home">Home</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link fw-bold" to="/courses">Courses</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link fw-bold" to="/faq">FAQ</Link>
                            </li>
                            <li className="nav-item ms-3">
                                <Link className="nav-link fw-bold" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item ms-3">
                                {
                                    theme ?
                                        <button className='light-theme-button rounded' onClick={()=>setTheme(!theme)}>
                                            Light
                                            <FaSun className='ms-2' />
                                        </button>
                                        :
                                        <button className='dark-theme-button rounded' onClick={()=>setTheme(!theme)}>
                                            Dark
                                            <FaMoon className='ms-2' />
                                        </button>

                                }
                            </li>
                            <li className="nav-item ms-3">
                                <button>logout/pic</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;