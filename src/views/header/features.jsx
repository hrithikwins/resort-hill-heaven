
import React from 'react';
import { FaHotel, FaTree, FaPalette, FaUtensilSpoon, FaCookie } from 'react-icons/fa';

export const Features = () => (
    <div className="site-section  border-bottom">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                    <div className="media custom-media">
                        <div className="mr-3 icon"><span className="flaticon-sit-down display-4 col-primary" ><FaHotel /></span></div>
                        <div className="media-body">
                            <h5 className="mt-0">Comfortable Rooms</h5>
                            <h6>Rooms with French and European concept to experience luxury at its best.</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                    <div className="media custom-media">
                        <div className="mr-3 icon"><span className="flaticon-step-ladder display-4" ><FaTree /></span></div>
                        <div className="media-body">
                            <h5 className="mt-0">Nature at its best</h5>
                            <h6>Experience variety in species of Trees, Medicinal Plants and Amazing Fruits..</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                    <div className="media custom-media">
                        <div className="mr-3 icon">
                            <span className="flaticon-sit-down display-4" ><FaUtensilSpoon /></span></div>
                        <div className="media-body">
                            <h5 className="mt-0">Cusine Food</h5>
                      Taste of food for the Heart.
                      Healthy and Isolated food culture for Veg &amp; Non-Veg Lovers
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);