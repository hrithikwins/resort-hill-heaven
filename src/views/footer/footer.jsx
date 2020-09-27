import React from 'react';
import "../footer/footer.css";
import logoImage from 'images/logo-background-removed.png';
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
        <div className="socialIcons">
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
        <div className="siteData">
          <div className="client">
            <h4>
              Heaven Hill Resort <sup>TM</sup> <br /> All rights reserved.{" "}
            </h4>
          </div>
          <div className="team">
            <h4>
              Development Team:{" "}
              <a
                href="https://www.instagram.com/hrithikrtiwari"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                @hrithikrtiwari
              </a>
            </h4>
          </div>
        </div>
        <div className="visitorcount">
          <h4>Visitor Count:</h4>
          <p>
            {/* Badge Code - Do Not Change The Code */}
            <div className="col-xs-12 mt20" id="bg">
              <div
                style={{
                  margin: "0px auto",
                  width: "133px",
                  backgroundColor: "rgb(77, 176, 255)",
                  "-webkit-text-align": "left",
                  "text-align": "left",
                  display: "flex",
                  "border-radius": "5px",
                }}
              >
                <span
                  style={{
                    padding: "7px",
                    display: "inline-block",
                    "border-right": "1px solid #746dba",
                  }}
                >
                  <a
                    href="http://visitorshitcounter.com"
                    rel="nofollow noopener"
                    target="_blank"
                    title="https://visitorshitcounter.com/"
                  >
                    <img
                      src="https://visitorshitcounter.com/img/s-logo.svg"
                      alt="https://visitorshitcounter.com/"
                      style={{ width: "100%", border: "none", float: "left" }}
                    />
                  </a>
                </span>
                <span
                  className="text"
                  id="dupli_hit_counter"
                  style={{
                    padding: "10px 0 0 0",
                    display: "inline-block",
                    color: "rgb(0, 0, 0)",
                    width: "100%",
                    "-webkit-text-align": "center",
                    "text-align": "center",
                  }}
                />
                <input
                  type="hidden"
                  id="site_val"
                  defaultValue="https://visitorshitcounter.com/counterDisplay?code=b19130d964e91884fc23cb365aa60f35&style=0017&pad=5&type=page&initCount=1"
                />
              </div>
            </div>
            {/* Badge Code End Here */}
          </p>
        </div>
      </div>
    </div>
  </footer>
);