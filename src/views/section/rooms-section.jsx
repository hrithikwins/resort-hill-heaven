import React from 'react';
import '../section/styles/rooms.sass';
import DiningHall from 'images/rooms/dining_hall.jpg';
import DormitoryRoom from 'images/rooms/dormitory.jpg';
import ConferenceHall from 'images/rooms/conference_room.jpg';
import European from 'images/rooms/european.jpg';
import French from 'images/rooms/french.jpg';
import TreeHouse from 'images/rooms/tree-house.jpg';
import { Link } from 'react-router-dom';

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
                    <Link to="images/img_4.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={ConferenceHall} alt="Conference Hall" />
                    </Link>
                    <h3 className="mb-0"><Link to="#home">Conference Hall</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <Link to="images/img_5.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={DormitoryRoom} alt="Rooms"/>
                    </Link>
                    <h3 className="mb-0"><Link to="#home"> Dormitory Room</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <Link to="images/img_6.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={DiningHall} alt="Rooms" />
                    </Link>
                    <h3 className="mb-0"><Link to="#home">Dining Hall</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <Link to="images/img_1.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={TreeHouse} alt="Rooms" />
                    </Link>
                    <h3 className="mb-0"><Link to="#home">Tree House</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <Link to="images/img_2.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={French} alt="Rooms" />
                    </Link>
                    <h3 className="mb-0"><Link to="#home">French Rooms</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
                <div className="col-lg-4 col-md-6 mb-4 project-entry">
                    <Link to="images/img_3.jpg" className="d-block figure" data-fancybox="gallery">
                        <img src={European} alt="Rooms" />
                    </Link>
                    <h3 className="mb-0"><Link to="#home">European Rooms</Link></h3>
                    <span className="text-muted">Interior</span>
                </div>
            </div>
        </div>
    </div>
);