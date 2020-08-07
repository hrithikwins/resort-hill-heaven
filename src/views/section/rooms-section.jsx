import React from 'react';
import '../section/styles/rooms.sass';
import DiningHall from 'images/rooms/dininghall.png';
import DormitoryRoom from 'images/rooms/dormitory.jpg';
import DormitoryRoom1 from 'images/rooms/dormitoryrooms.png';
import European from 'images/rooms/european.jpg';
import French from 'images/rooms/french.jpg';
import TreeHouse from 'images/rooms/tree-house.jpg';

export const RoomsSection = () => (
    <div className="site-section" id="rooms-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7 text-center">
                    <span className="sub-title">Awesome rooms</span>
                    <h2 className="font-weight-bold text-black">Our rooms</h2>
                    <p className="mb-5">Heaven Hill Resort has awesome rooms with variety of luxuries explored around the world.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_1.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={TreeHouse} />
                    </a>
                    <h3 className="mb-0"><a href="#home">Tree House</a></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_2.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={French} />
                    </a>
                    <h3 className="mb-0"><a href="#home">French Rooms</a></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_3.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={European} />
                    </a>
                    <h3 className="mb-0"><a href="#home">European Rooms</a></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_4.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={DormitoryRoom1} />
                    </a>
                    <h3 className="mb-0"><a href="#home">Conference Hall</a></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_5.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={DormitoryRoom} />
                    </a>
                    <h3 className="mb-0"><a href="#home"> Dormitory Room</a></h3>
                    <span className="text-muted">Design</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <a href="images/img_6.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={DiningHall} />
                    </a>
                    <h3 className="mb-0"><a href="#home">Dining Hall</a></h3>
                    <span className="text-muted">Design</span>
                </div>
            </div>
        </div>
    </div>
);