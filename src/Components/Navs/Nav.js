import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
class Nav extends Component {
    render() {
        return (
            <div>
                {/* Navigation*/}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#page-top">Start Bootstrap</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            {/* <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                                <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
                                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                                <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                            </ul> */}
                            <ul className="navbar-nav ms-auto my-2 my-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                                </li >
                                <li className="nav-item">
                                    <NavLink className="nav-link"exact  to="/tintuc">News</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact  to="/lienhe">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact  to="/tinchitiet">News Details</NavLink>
                                </li>
                             </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;