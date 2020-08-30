import React from 'react';
import logoImage from 'images/logo.jpg';
import '../nav/styles/nav.sass';
import {Link} from 'react-router-dom';
import { FaArrowRight , FaEnvelope, FaPhoneAlt, FaHamburger, FaBars, FaLongArrowAltDown, FaArrowDown, FaArrowsAltV, FaArrowCircleDown} from 'react-icons/fa';



export const Navigation = () => (
    <>

        <div className="site-navbar-wrap">
            <div className="site-navbar-top">
                <div className="container py-3">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <a href="https://www.twitter.com/" className="p-2 pl-0"><span className="icon-twitter" /></a>
                            <a href="http://facebook.com/heavenhill.3" className="p-2 pl-0"><span className="icon-facebook" /></a>
                            <a href="http://www.instagram.com/heaven_hill_resort" className="p-2 pl-0"><span className="icon-instagram" /></a>
                            <a href="tel:9021184505" className="p-2 pl-0"><span className="icon-phone" /></a>
                        </div>
                        <div className="col-6">
                            <div className="d-flex ml-auto">
                                <a href="#home" className="d-flex align-items-center ml-auto mr-4">
                                    <span className="icon-envelope mr-2">
                                        <FaEnvelope/>
                                        </span>
                                    <span className="d-none d-md-inline-block">heavenhillagro1@gmail.com</span>
                                </a>
                                <a href="tel:9021184505" className="d-flex align-items-center">
                                    <span className="icon-phone mr-2"> <FaPhoneAlt /></span>
                                    <span className="d-none d-md-inline-block">+91 90211 84505</span>
                                </a>
                                <a href="tel:9823268205" className="d-flex align-items-center">
                                    <span className="icon-phone mr-2"> <FaPhoneAlt /></span>
                                    <span className="d-none d-md-inline-block">+91 98232 68205</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-navbar site-navbar-target js-sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1 className="my-0 site-logo"><a href="index.html">
                                <img src={logoImage} className="site-logo-image" alt="logo" />
                                {/*the image logo  */}
                            </a>
                            </h1>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-right" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3">
                                        <a href="#home" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3"><FaBars /></span></a></div>
                                    <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
                                        <li>
                                            <a href="#home-section" className="nav-link">Home</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="#about-section" className="nav-link">About Us <FaArrowCircleDown /></a>
                                            <ul className="dropdown arrow-top">
                                                <li><a href="#about-section" className="nav-link">About</a></li>
                                                <li><a href="#pricing-section" className="nav-link">Pricing</a></li>
                                                <li><a href="#faq-section" className="nav-link">FAQ</a></li>
                                                <li className="has-children">
                                                    <a href="gallery">Gallery<FaArrowRight/></a>
                                                    <ul className="dropdown">
                                                        <li><a href="#home">Rooms</a></li>
                                                        <li><a href="#home">Picnics</a></li>
                                                        <li><a href="#home">Environment</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#rooms-section" className="nav-link">Rooms</a>
                                        </li>
                                        <li><a href="#pricing-chart-section" className="nav-link">Pricing</a></li>
                                        <li><a href="#features-section" className="nav-link">Features</a></li>
                                        <li><a href="#contact-section" className="nav-link">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
