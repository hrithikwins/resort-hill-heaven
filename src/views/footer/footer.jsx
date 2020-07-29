import React from 'react';

export const Footer = () => (
    <footer className="site-footer border-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <div className="row mb-5">
                        <div className="col-12">
                            <h3 className="footer-heading mb-4">About Us</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non rem iusto nisi, eum
                            vitae quas culpa fugiat itaque aliquam nulla, accusamus aspernatur molestias
                        recusandae voluptates ratione dolores deleniti velit. Corporis.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12">
                            <h3 className="footer-heading mb-4">Navigation</h3>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#home">Services</a></li>
                                <li><a href="#home">News</a></li>
                                <li><a href="#home">Team</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <ul className="list-unstyled">
                                <li><a href="#home">Interior Design</a></li>
                                <li><a href="#home">Architect</a></li>
                                <li><a href="#home">Privacy</a></li>
                                <li><a href="#home">Membership</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="mb-5">
                        <h3 className="footer-heading mb-4">Recent News</h3>
                        <div className="block-25">
                            <ul className="list-unstyled">
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_2.jpg" alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 16, 2018</span>
                                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                consectetur elit</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_3.jpg" alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 16, 2018</span>
                                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                consectetur elit</h3>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-3">
                                    <a href="#home" className="d-flex">
                                        <figure className="image mr-4">
                                            <img src="images/img_4.jpg"  alt="news" className="img-fluid" />
                                        </figure>
                                        <div className="text">
                                            <span className="small text-uppercase date">Jan 16, 2018</span>
                                            <h3 className="heading font-weight-light">Lorem ipsum dolor sit amet
                                consectetur elit</h3>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit minima minus odio.</p>
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