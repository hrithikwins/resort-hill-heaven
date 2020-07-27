import React from 'react';
export const PricingChartSection = () => (
    <div className="site-section" id="pricing-chart-section">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <span className="sub-title">Pricing Chart Section</span>
                    <h2 className="font-weight-bold text-black mb-5">Our Blog Posts</h2>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
                    <a href="#home" className="d-block figure">
                        <img src="images/img_1.jpg" alt="Image" className="img-fluid" />
                    </a>
                    <span className="text-muted d-block mb-1">29, January 2019</span>
                    <h3><a href="#home">Architectural Art Modern</a></h3>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
                    <a href="#home" className="d-block figure">
                        <img src="images/img_2.jpg" alt="Image" className="img-fluid" />
                    </a>
                    <span className="text-muted d-block mb-1">29, January 2019</span>
                    <h3><a href="#home">Architectural Art Modern</a></h3>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 post-entry">
                    <a href="#home" className="d-block figure">
                        <img src="images/img_3.jpg" alt="Image" className="img-fluid" />
                    </a>
                    <span className="text-muted d-block mb-1">29, January 2019</span>
                    <h3><a href="#home">Architectural Art Modern</a></h3>
                </div>
            </div>
            <div className="row mt-5 text-center">
                <div className="col-12">
                    <p><a href="#home" className="btn btn-primary btn-lg rounded-0">View All Posts</a></p>
                </div>
            </div>
        </div>
    </div>
);