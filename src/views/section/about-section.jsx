import React from 'react';
import '../../App.css';

export const AboutSection = () => (
    <div className="site-section about-section" id="about-section">
        <div className="container">
            <div className="row align-items-center mb-5 pb-5">
                <div className="col-lg-7 img-years mb-5 mb-lg-0">
                    <img src="images/hero_bg_1.jpg" alt="about" className="img-fluid" />
                </div>
                <div className="col-lg-4 ml-auto">
                    <span className="sub-title">Learn To Know More</span>
                    <h3 className="mb-4">About Heaven Hill Resort</h3>
                    <p className="mb-4"><span role="img" aria-label="hotel">🏨</span>Heaven Hill Resort is an Agrotourism based resort in Boisar/Palghar District.
                  </p>
                    <ul className="list-unstyled ul-check text-left success mb-5">
                        <li>13 kms from Boisar Station</li>
                        <li>Amongst the Nature, Hills &amp; Natural Water Resources</li>
                        <li>10 minutes Drive from NH 48</li>
                        <li>Accessible by all means</li>
                    </ul>
                    <p><a href="about-us.html" className="btn btn-primary btn-lg rounded-0">Read More About Us</a></p>
                </div>
            </div>
        </div>
    </div>
);