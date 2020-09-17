import React from 'react';
import "../footer/footer.css";
import logoImage from 'images/logo.jpg';

export const Footer = () => (
    <footer>
        <div className="footerData">
            <div className="footerFlex">
                <div className="heavenHillFooter">
                    <aside className>
                        <div className>
                            <h3>Heaven Hill Resort</h3>
                        </div>
                        <div className>
                            <img style={{ "width": "100%", "display": "inline", "box-shadow": "inset 2px 2px 10px 10px #000f" }} src={logoImage} alt="logoImage" />
                        </div>
                    </aside>
                </div>
                <div className="extraLinks">
                    <aside className>
                        <div className>
                            <h3>Extra Links</h3>
                        </div>
                        <ul>
                            <li><a href="/home/#about-section">- About Us</a></li>
                            <li><a href="/home/#faq-section">- Faq’s</a></li>
                            <li><a href="/blog">- Blog</a></li>
                            <li><a href="/testimonials">- Testimonials</a></li>
                            <li><a href="/reservation">- Reservation</a></li>
                        </ul>
                    </aside>
                </div>
                <div className="ourServices">
                    <aside className>
                        <div className>
                            <h3>Our Services</h3>
                        </div>
                        <ul>
                            <li><a href="/food">- Food &amp; Drinks</a></li>
                            <li><a href="/home/#rooms-section">- Rooms</a></li>
                            <li><a href="/amenities">- Amenities</a></li>
                            <li><a href="/gym">- Gym &amp; Spa</a></li>
                            <li><a href="/hill-tours">- Hill Tours</a></li>
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
                        <a href="https://www.instagram.com/heaven_hill_resort"><i className="fab fa-instagram" /></a>
                    </div>
                    <div className="whatsapp">
                        <a href="https://wa.me/919021184505"><i className="fab fa-whatsapp" /></a>
                    </div>
                    <div className="fb">
                        <a href="https://www.facebook.com/"><i className="fab fa-facebook-square" /></a>
                    </div>
                    <div className="twitter">
                        <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                    </div>
                </div>
                <div className="siteData">
                    <div className="client">
                        <h4>Heaven Hill Resort <sup>TM</sup> <br /> All rights reserved. </h4>
                    </div>
                    <div className="team">
                        <h4>Development Team: <a href="#">@hrithikrtiwari</a></h4>
                    </div>
                </div>
                <div className="visitorcount">
                    <h4>Visitor Count:</h4>
                    <p>
                        <a className="hitCounter" href="https://visitorshitcounter.com/" target="_blank" rel="nofollow noopener" title="Hit counter" data-name="456e2e9b6f5f4d3ae002b443f2522c2b|3|page|195|#000000|#f19494|small|s-hit">Hit Counter</a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
);