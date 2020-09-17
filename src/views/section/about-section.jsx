import React from 'react';
import heroBg from 'images/hero_bg_1.jpeg';
import { Link } from 'react-router-dom';
import {  FaCheckSquare } from 'react-icons/fa';
import "./styles/about-section.sass";

export const AboutSection = () => (
    <div className="site-section about-section" id="about-section">
        <div className="container">
            <div className="row align-items-center mb-5 pb-5">
                <div className="col-lg-7 img-years mb-5 mb-lg-0">
                    <img src={heroBg} alt="about" className="img-fluid" />
                </div>
                <div className="col-lg-4 ml-auto">
                    <span className="sub-title">Learn To Know More</span>
                    <h3 className="mb-4">About Heaven Hill Resort</h3>
                    <p className="mb-4"><span role="img" aria-label="hotel">🏨</span>Heaven Hill Resort is an Agrotourism based resort in Boisar/Palghar District.
                  </p>
                    <ul className="list-unstyled  text-left success mb-5">
                        <li><FaCheckSquare color="green" /> Amongst the Nature, Hills &amp; Natural Water Resources</li>
                        <li><FaCheckSquare color="green" />  Accessible by all means</li>
                        <li><FaCheckSquare color="green" />  11 kms from Boisar</li>
                        <li><FaCheckSquare color="green" />  4kms away from NH 48</li>
                    </ul>
                    <p><Link to="/about-us.html" className="btn btn-primary btn-lg rounded-0">Read More About Us</Link></p>
                </div>
            </div>
        </div>
    </div>
);