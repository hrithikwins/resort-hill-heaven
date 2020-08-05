import React from 'react';

export const Footer = () => (
    <footer className="site-footer border-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="footer-heading mb-4">About Us</h3>
                            <p>We at Heaven Hill Resort aim at providing our guests the best experience
                                of tourism and we believe to fill their life with various precious moments spent 
                                at Heaven Hill Resort.
                            </p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h3 className="footer-heading mb-4">Navigation</h3>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">About</a></li>
                                <li><a href="#home">Pricing</a></li>
                                <li><a href="#home">Gallery</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">About</a></li>
                                <li><a href="#home">Pricing</a></li>
                                <li><a href="#home">Offers</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-5">
                        <h3 className="footer-heading mb-4">Latest News</h3>
                        <div className="block-25">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_2.jpg" alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 26, 2021</span>
                                            <h3 className="heading font-weight-light">Republic Day offers at Heaven Hill Resort</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_3.jpg" alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 26, 2021</span>
                                            <h3 className="heading font-weight-light">heaven hill resort is a resort in boisar</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_4.jpg"  alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 26, 2021</span>
                                            <h3 className="heading font-weight-light">heaven hill resort is a resort in boisar</h3>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="mb-5">
                        <h3 className="footer-heading mb-2">Subscribe Newsletter</h3>
                        <p>heaven hill resort is a resort in boisar.</p>
                        <form action="#" method="post" className="form-subscribe">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control border-white text-white bg-transparent" placeholder="Enter Email" aria-label="Enter Email" aria-describedby="button-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button" id="button-addon2">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3 className="footer-heading mb-4">Follow Us</h3>
                            <div>
                                <a href="#home" className="pl-0 pr-3"><span className="icon-facebook" /></a>
                                <a href="#home" className="pl-3 pr-3"><span className="icon-twitter" /></a>
                                <a href="#home" className="pl-3 pr-3"><span className="icon-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row pt-5 mt-5 text-center">

            </div>
        </div>
    </footer>
);