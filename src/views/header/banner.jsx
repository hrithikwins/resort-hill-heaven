import React from "react";
import '../../App.css';

export const Banner = () => (
    <div className="site-blocks-cover overlay" style={{ "background-image": "url(images/Free-Blue-Textured-Background-For-Download.jpg)" }} data-aos="fade" data-stellar-background-ratio="0.5" id="home-section">
        <div className="container">
            <div className="row align-items-center text-center justify-content-center">
                <div className="col-md-8">
                    <a data-fancybox data-ratio={2} href="#home" className="play-button d-block">
                        <span className="icon-building-o" />
                    </a>
                    <h1 className="text-uppercase">Heaven Hill Resort</h1>
                    <span className="sub-text mb-3 d-block"><em>#Refined By Nature</em></span>
                </div>
            </div>
        </div>
    </div>
);