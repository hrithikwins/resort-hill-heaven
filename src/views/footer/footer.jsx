import React from 'react';
import "../footer/footer.css";
import logoImage from 'images/logo.png';
import WebDux from "images/webdux.png";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Footer = () => (
  <footer>
    <div className="footerData">
      <div className="footerFlex">
        <div className="heavenHillFooter">
          <aside>
            <div>
              <h3>Heaven Hill Resort</h3>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                  display: "inline",
                }}
                src={logoImage}
                alt="logoImage"
              />
            </div>
          </aside>
        </div>
        <div className="extraLinks">
          <aside className>
            <div className>
              <h3>Extra Links</h3>
            </div>
            <ul>
              <li>
                <a href="/home/#about-section">- About Us</a>
              </li>
              <li>
                <a href="/home/#faq-section">- Faq’s</a>
              </li>
              <li>
                <a href="/blog">- Blog</a>
              </li>
              <li>
                <a href="/testimonials">- Testimonials</a>
              </li>
              <li>
                <a href="/reservation">- Reservation</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="ourServices">
          <aside className>
            <div className>
              <h3>Our Services</h3>
            </div>
            <ul>
              <li>
                <a href="/food">- Food &amp; Drinks</a>
              </li>
              <li>
                <a href="/home/#rooms-section">- Rooms</a>
              </li>
              <li>
                <a href="/amenities">- Amenities</a>
              </li>
              <li>
                <a href="/gym">- Gym &amp; Spa</a>
              </li>
              <li>
                <a href="/hill-tours">- Hill Tours</a>
              </li>
            </ul>
          </aside>
        </div>
        <div className="socialMedia">
          <aside className>
            <div className>
              <h3>Instagram</h3>
            </div>
            <ul className="instaImages">
              {/* Instagram Post images *grid* */}
            </ul>
          </aside>
        </div>
      </div>
    </div>
    <div className="bottomInfo">
      <div className>
        <div className="socialIcons py-md-4">
          <div className="insta">
            <a href="https://www.instagram.com/heaven_hill_resort">
              <FaInstagram />
            </a>
          </div>
          <div className="whatsapp">
            <a href="https://wa.me/919021184505">
              <FaWhatsapp />
            </a>
          </div>
          <div className="fb">
            <a href="https://www.facebook.com/">
              <FaFacebook />
            </a>
          </div>
          <div className="twitter">
            <a href="https://www.twitter.com/">
              <FaTwitter />
            </a>
          </div>
        </div>
        <div className="siteData d-flex justify-content-around text-white ">
          <div>
            <h4 className="text-white">
              Heaven Hill Resort <sup>TM</sup> <br /> All rights reserved.{" "}
            </h4>
          </div>
          <div>
            <h4 className="text-white">
              Developed By:
              <a
                href="https://www.webdux.tech"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="bg-white p-4"
              >
                <img
                  src={WebDux}
                  alt="Developed by WebDux Tech"

                />
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </footer>
);