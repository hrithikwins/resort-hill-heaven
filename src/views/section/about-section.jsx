import React from 'react';
import heroBg from 'images/hero_bg_1.jpeg';
import garden from 'images/introductiongallery/garden.jpg';
import garden1 from "images/introductiongallery/garden1.jpg";
import nightmode from "images/introductiongallery/nightmode.jpg";
import { Link } from 'react-router-dom';
import {  FaCheckSquare } from 'react-icons/fa';
import { Slide} from "react-slideshow-image";
import "./styles/about-section.sass";


const images = [heroBg, garden, garden1, nightmode];
 

export const AboutSection = () => (
  <div className="site-section about-section" id="about-section">
    <div className="container">
      <div className="row align-items-center mb-5 pb-5">
        {/* <div className="col-lg-7 img-years mb-5 mb-lg-0">
                    <img src={heroBg} alt="about" className="img-fluid" />
                </div> */}
        <div className="col-lg-7 img-years mb-5 mb-lg-0 slide-container">
          <Slide scale={0.4}>
            {images.map((each, index) => (
              <div className="slide-image"><img key={index} style={{ width: "100%" }} src={each} /></div>
            ))}
          </Slide>
        </div>
        <div className="col-lg-4 ml-auto">
          <span className="sub-title">Learn To Know More</span>
          <h3 className="mb-4">About Heaven Hill Resort</h3>
          <p className="mb-4">
            <span role="img" aria-label="hotel">
              🏨
            </span>
            Heaven Hill Resort is an Agrotourism based resort in Boisar/Palghar
            District.
          </p>
          <ul className="list-unstyled  text-left success mb-5">
            <li>
              <FaCheckSquare color="green" /> Amongst the Nature
            </li>
            <li>
              <FaCheckSquare color="green" /> Surrounded by Hills
            </li>
            <li>
              <FaCheckSquare color="green" /> Natural Water Resources
            </li>
            <li>
              <FaCheckSquare color="green" /> Indigenous Plants &amp; animals
            </li>
            <li>
              <FaCheckSquare color="green" /> Accessible by all means
            </li>
            <li>
              <FaCheckSquare color="green" /> 11 kms from Boisar
            </li>
            <li>
              <FaCheckSquare color="green" /> 4kms away from NH 48
            </li>
          </ul>
          <p>
            <Link
              to="/about-us.html"
              className="btn btn-primary btn-lg rounded-0"
            >
              Read More About Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);