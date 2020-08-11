import React from 'react';
import logoImage from 'images/logo.jpg';
import '../nav/styles/nav.sass';
import {Link} from 'react-router-dom';


export const Navigation = () => (
    <>

        <div className="site-navbar-wrap">
            <div className="site-navbar-top">
                <div className="container py-3">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <Link to="#home" className="p-2 pl-0"><span className="icon-twitter" /></Link>
                            <Link to="http://facebook.com/heavenhill.3" className="p-2 pl-0"><span className="icon-facebook" /></Link>
                            <Link to="http://www.instagram.com/heaven_hill_resort" className="p-2 pl-0"><span className="icon-instagram" /></Link>
                            <Link to="tel:9021184505" className="p-2 pl-0"><span className="icon-phone" /></Link>
                        </div>
                        <div className="col-6">
                            <div className="d-flex ml-auto">
                                <Link to="#home" className="d-flex align-items-center ml-auto mr-4">
                                    <span className="icon-envelope mr-2" />
                                    <span className="d-none d-md-inline-block">heavenhillagroresort@gmail.com</span>
                                </Link>
                                <Link to="#home" className="d-flex align-items-center">
                                    <span className="icon-phone mr-2" />
                                    <span className="d-none d-md-inline-block">+91 90211 84505</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-navbar site-navbar-target js-sticky-header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h1 className="my-0 site-logo"><Link to="index.html">
                                <img src={logoImage} className="site-logo-image" alt="logo" />
                                {/*the image logo  */}
                            </Link>
                            </h1>
                        </div>
                        <div className="col-10">
                            <nav className="site-navigation text-right" role="navigation">
                                <div className="container">
                                    <div className="d-inline-block d-lg-none ml-md-0 mr-auto py-3"><Link to="#home" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></Link></div>
                                    <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
                                        <li>
                                            <Link to="#home-section" className="nav-link">Home</Link>
                                        </li>
                                        <li className="has-children">
                                            <Link to="#about-section" className="nav-link">About Us</Link>
                                            <ul className="dropdown arrow-top">
                                                <li><Link to="#about-section" className="nav-link">About</Link></li>
                                                <li><Link to="#pricing-section" className="nav-link">Pricing</Link></li>
                                                <li><Link to="#faq-section" className="nav-link">FAQ</Link></li>
                                                <li className="has-children">
                                                    <Link to="gallery">Gallery</Link>
                                                    <ul className="dropdown">
                                                        <li><Link to="#home">Rooms</Link></li>
                                                        <li><Link to="#home">Picnics</Link></li>
                                                        <li><Link to="#home">Environment</Link></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <Link to="#rooms-section" className="nav-link">Rooms</Link>
                                        </li>
                                        <li><Link to="#pricing-chart-section" className="nav-link">Pricing</Link></li>
                                        <li><Link to="#features-section" className="nav-link">Features</Link></li>
                                        <li><Link to="#contact-section" className="nav-link">Contact</Link></li>
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
