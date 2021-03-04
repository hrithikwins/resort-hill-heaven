import React from "react";
import logoImage from "images/logo.png";
import heroBg from "images/hero_bg_1.jpeg";
import "../header/styles/banner.sass";

export const Banner = () => (
  <>
    <header class="masthead vh-100 d-flex justify-content-center align-items-center">
      <div class="intro-body">
        <div class="container">
          <div class="row intro-container">
            <div class="p-4 col-lg-8 mx-auto">
              <h1 class="brand-heading p-lg-4 text-center">
                <span className="jumping-text-container">
                  <span className="n-1">H</span>
                  <span className="n-2">E</span>
                  <span className="n-3">A</span>
                  <span className="n-4">V</span>
                  <span className="n-5">E</span>
                  <span className="n-6">N</span>
                  <span className="n-7">&nbsp;</span>
                  <span className="n-8">H</span>
                  <span className="n-9">I</span>
                  <span className="n-10">L</span>
                  <span className="n-11">L</span>
                  <span className="n-12">&nbsp;</span>
                  <span className="n-13">R</span>
                  <span className="n-14">E</span>
                  <span className="n-15">S</span>
                  <span className="n-16">O</span>
                  <span className="n-17">R</span>
                  <span className="n-18">T</span>
                </span>
              </h1>
              <p
                class="intro-text text-center"
                data-aos="fade-up"
                data-aos-duration="3700"
                data-aos-delay="4000"
              >
                Somewhere among the hills, when the sun sets, new experiences
                find their way. Come to experience the unleashed joy and
                surprises amongst the nature.
              </p>
              <div class="d-flex justify-content-center">
                <button
                  class="glass-blue-btn"
                  type="button"
                  data-aos="fade-up"
                  data-aos-duration="4500"
                  data-aos-delay="7000"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </>
);
