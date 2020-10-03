import React from "react";
import logoImage from "images/logo.png";
import heroBg from "images/hero_bg_1.jpeg";
import "../header/styles/banner.sass";

export const Banner = () => (
  <>
    <div class="fullscreen-bg">
      <img src={heroBg} alt="background" />
    </div>
    <div
      className="site-blocks-cover overlay"
      data-aos="fade"
      data-stellar-background-ratio="0.5"
      id="home-section"
    >
      <div className="banner-background-gif">
        <div className="row align-items-center text-center justify-content-center">
          <div className="col-md-8">
            <a
              data-fancybox
              data-ratio={2}
              href="#home"
              className="play-button d-block"
            >
                <img src={logoImage} alt="logo" className="banner-img" />
            </a>

            <h1 className="text-uppercase bubblegum-font">
              Heaven Hill Resort
            </h1>
            <span className="sub-text mb-3 d-block text-orange">
              <em>#Refined By Nature</em>
            </span>
          </div>
        </div>
      </div>
    </div>
  </>
);
