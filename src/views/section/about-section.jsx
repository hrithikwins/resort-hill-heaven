import React from "react";
import garden from "images/introductiongallery/garden.jpg";
import nightmode from "images/introductiongallery/nightmode.jpg";
import garden1 from "images/introductiongallery/garden1.jpg";
import { Link } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
import { Slide } from "react-slideshow-image";
import "./styles/about-section.sass";
import div from 'react-on-scroll-animation';
const images = [garden, garden1, nightmode];

export const AboutSection = () => (
  <div className="site-section about-section" id="about-section">
    <div className="container-fluid p-4">
      <div className="row ml-md-4  p-md-4 align-items-center mb-5 pb-5">
        <div className="col-lg-6 img-years mb-5 mb-lg-0 slide-container">
          <Slide scale={0.4}>
            {images.map((each, index) => (
              <div className="slide-image">
                <img
                  key={index}
                  style={{ width: "100%" }}
                  src={each}
                  alt="slider"
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="col-lg-5 ml-auto">
          <span className="sub-title">Learn To Know More</span>
          <h3 className="mb-4">About Heaven Hill Resort</h3>
          <p className="mb-4">
            <span role="img" aria-label="hotel">
              🏨
            </span>
            Heaven Hill Resort is an Agrotourism based <br/>resort in Boisar/Palghar
            District.
          </p>
          <ul className="list-unstyled  text-left success mb-5">
            <li>
              <div>
                <FaCheckSquare color="green" /> Amongst the Nature
              </div>
            </li>
            <li>
              <div>
                <FaCheckSquare color="green" /> Surrounded by Hills
              </div>
            </li>
            <li>
              <div>
              <FaCheckSquare color="green" /> Natural Water Resources
              </div>
            </li>
            <li>
              <div>
              <FaCheckSquare color="green" /> Indigenous Plants &amp; animals
              </div>
            </li>
            <li>
              <div>
              <FaCheckSquare color="green" /> Accessible by all means
              </div>
            </li>
            <li>
              <div>
              <FaCheckSquare color="green" /> 11 kms from Boisar
              </div>
            </li>
            <li>
              <div>
              <FaCheckSquare color="green" /> 4kms away from NH 48
              </div>
            </li>
          </ul>
          <p>
            <Link
              to="/about-page#about-page"
              className="glass-blue-btn text-white"
            >
              Read More About Us
            </Link>
          </p>
        </div>
      </div>
    </div>
  </div>
);
