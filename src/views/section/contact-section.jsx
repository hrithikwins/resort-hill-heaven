import React from "react";
import "./styles/contact-section.sass";
import { TextField, Button } from "@material-ui/core";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const ContactSection = () => (
  <>
    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 text-center">
            <span className="sub-title">Get In Touch</span>
            <h2 className="font-weight-bold text-black">Contact Us</h2>
            <p className="mb-5">Heaven Hill Resort is easy.</p>
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
            {/* COMPANY INFORMATION */}
            <div className="company-info">
              <h3>Heaven Hill Resort</h3>
              <ul>
                <li>
                  <i className="fa fa-road" /> Heaven Hill Resort - Lalonde,
                  Boisar 401501, Tal & Dist: Palghar,
                </li>
                <li>
                  <FaPhoneAlt /> +91 90211 84505
                </li>
                <li>
                  <FaPhoneAlt /> +91 98232 68205
                </li>
                <li>
                  <FaEnvelope /> heavenhillagro1@gmail.com
                </li>
              </ul>
            </div>
            {/* End .company-info */}
            {/* CONTACT FORM */}
            <div className="contact">
              <div className="row">
                <div className="col-md-12 col-lg-12">
                  <form action="#" className="bg-white">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <TextField
                        label="Full Name"
                        name="full_name"
                        variant="outlined"
                        fullWidth
                      ></TextField>
                      <br />
                      <TextField
                        label="Email Address"
                        name="email_address"
                        variant="outlined"
                        fullWidth
                      ></TextField>
                      <TextField
                        label="Message"
                        name="full_name"
                        variant="outlined"
                        fullWidth
                        multiline
                      ></TextField>
                      <Button variant="text" color="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </form>
                  {/* End #contact-form */}
                </div>
                {/* End .contact */}
              </div>
              {/* End .wrapper */}
            </div>
            {/* End .container */}
          </div>
        </div>
      </div>
    </div>
  </>
);
