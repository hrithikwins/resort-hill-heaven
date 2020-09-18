import React, { useState } from 'react';
import logoImage from 'images/logo.jpg';
import '../nav/styles/nav.sass';
import { FaEnvelope, FaPhoneAlt, FaBars, FaTwitter, FaFacebook, FaInstagram, FaHome, FaInfo, FaPhotoVideo, FaMoneyCheckAlt, FaQuestion, FaLocationArrow } from 'react-icons/fa';





export const Navigation = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    function openMenu() {
        var mobi = document.querySelector('#mobileNav');
        mobi.style.display = 'block';
        setMenuVisible(true);
    }
    function closeMenu() {
        var mobi = document.querySelector('#mobileNav');
        mobi.style.display = 'none';
        mobi.style.position = 'fixed';
        setMenuVisible(false);

    }
    return (
        <div className="nav-component">
            <ul className="" id="mobileNav" style={{ display: 'none' }}>
                <div className="nav-site-info">
                    <div className="my-0 site-logo site--header">
                        <a href="index.html">
                            <img src={logoImage} className="site-logo-image" alt="logo" />
                        </a>
                        <div className="close-menu" onClick={() => closeMenu()}>
                            &times;
                        </div>
                    </div>
                </div>
                <div><a href="/home/#home-section" className="menu-items" onClick={() => closeMenu()}><FaHome />&nbsp; Home</a></div><hr />
                <div><a href="/home/#about-section" className="menu-items" onClick={() => closeMenu()}><FaInfo />&nbsp; About</a></div> <hr />
                <div><a href="gallery" className="menu-items" onClick={() => closeMenu()}><FaPhotoVideo />&nbsp; Gallery</a></div> <hr />
                <div><a href="/home/#pricing-section" className="menu-items" onClick={() => closeMenu()}><FaMoneyCheckAlt />&nbsp; Tariff</a></div> <hr />
                <div><a href="/home/#faq-section" className="menu-items" onClick={() => closeMenu()}><FaQuestion />&nbsp; FAQs</a></div> <hr />
                <div><a href="/home/#contact-section" className="menu-items" onClick={() => closeMenu()}><FaLocationArrow />&nbsp; Contact</a></div>
            </ul>
            <div className="site-navbar-wrap">
                <div className="site-navbar-top">
                    <div className="container py-3">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <a href="https://www.twitter.com/" className="p-2 pl-0"><FaTwitter /></a>
                                <a href="http://facebook.com/heavenhill.3" className="p-2 pl-0"><FaFacebook /></a>
                                <a href="http://www.instagram.com/heaven_hill_resort" className="p-2 pl-0"><FaInstagram /></a>
                                <a href="tel:9021184505" className="p-2 pl-0"><FaPhoneAlt /></a>
                            </div>
                            <div className="col-6">
                                <div className="d-flex ml-auto">
                                    <a href="#home" className="d-flex align-items-center ml-auto mr-4">
                                        <span className="icon-envelope mr-2">
                                            <FaEnvelope />
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
                                            <div className="site-menu-toggle js-menu-toggle text-white">
                                                <span className="icon-menu h3"
                                                    // onClick={ (e) => {menuVisible ?  {e.preventDefault(); openMenu()}  : {e.preventDefault; closeMenu()}}
                                                    onClick={(e) => { menuVisible ? closeMenu() : openMenu() }}
                                                >
                                                    {menuVisible ? 'X' : <FaBars />}</span>
                                            </div>
                                        </div>
                                        <ul className="site-menu main-menu js-clone-nav d-none d-lg-block">
                                            <li>
                                                <a href="/home/#home-section" className="nav-link">Home</a>
                                            </li>
                                            <li>
                                                <a href="/home#about-section" className="nav-link">About</a>
                                            </li>
                                            <li>
                                                <a href="/gallery" className="nav-link">Gallery</a>
                                            </li>
                                            <li><a href="/home#pricing-section" className="nav-link">Tariff</a></li>
                                            <li><a href="/home#faq-section" className="nav-link">FAQs</a></li>
                                            <li><a href="/home#contact-section" className="nav-link">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
