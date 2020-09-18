import React from 'react';
import "./styles/contact-section.sass";
import { TextField, Button } from '@material-ui/core';

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
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <form action="#" className="p-5 bg-white">
                            <div className="row form-group">
                                <div className="col-md-12 mb-3 mb-md-0">
                                    {/* <label className="font-weight-bold" htmlFor="fullname">Full Name</label>
                                    <input type="text" id="fullname" className="form-control" placeholder="Full Name" /> */}
                                    <TextField label="Full Name" name="full_name" variant="outlined" fullWidth></TextField>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    {/* <label className="font-weight-bold" htmlFor="email">Email</label>
                                    <input type="email" id="email" className="form-control" placeholder="Email Address" /> */}
                                    <TextField label="Email Address" name="email_address" variant="outlined" fullWidth></TextField>

                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    {/* <label className="font-weight-bold" htmlFor="message">Message</label> */}
                                    {/* <textarea name="message" id="message" cols={30} rows={5} className="form-control" placeholder="Say hello to us" defaultValue={""} /> */}
                                    <TextField label="Message" name="full_name" variant="outlined" fullWidth multiline></TextField>

                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-12">
                                    <Button variant="text" color="primary" type="submit">Submit</Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
);