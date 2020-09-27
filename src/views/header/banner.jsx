import React from "react";
// import logoImage from "images/logo.png";
import logoImage from "images/logo-background-removed.png";
import '../header/styles/banner.sass';
import Video from "images/sea-sharp.webm";
import Video1 from "images/sea-sharp.mkv";
import Video2 from "images/sea-sharp.mp4";
import heroBg from 'images/hero_bg_1.jpeg';
export const Banner = () => (
  <>
    <div class="fullscreen-bg">
      {/* <video autoplay={true} loop={true} class="fullscreen-bg__video">
        <source src={Video2} />
      </video> */}
      <img src={heroBg} alt="background"/>
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