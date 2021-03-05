import React from "react";
import "../section/styles/rooms.sass";
import DiningHall from "images/rooms/dining_hall.jpg";
import DormitoryRoom from "images/rooms/dormitory.jpg";
import ConferenceHall from "images/rooms/conference_room.jpg";
import European from "images/rooms/european.jpg";
import French from "images/rooms/french.jpg";
import TreeHouse from "images/rooms/tree-house.jpg";

export const RoomsSection = () => (
  <div className="site-section" id="rooms-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-7 text-center">
          <span className="sub-title text-white">Awesome rooms</span>
          <h2 className="font-weight-bold text-black text-white bubblegum-font ">Rooms at Heaven Hill Resort</h2>
          <p className="mb-5 text-white">
            Heaven Hill Resort has awesome rooms with variety of luxuries
            explored around the world.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_4.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={ConferenceHall} alt="Conference Hall" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home">Conference Hall</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_5.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={DormitoryRoom} alt="Rooms" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home"> Dormitory Room</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_6.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={DiningHall} alt="Rooms" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home">Dining Hall</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_1.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={TreeHouse} alt="Rooms" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home">Tree House</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_2.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={French} alt="Rooms" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home">French Rooms</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
        <div className="col-lg-4 col-md-6 mb-4 project-entry room-card">
          <a
            href="images/img_3.jpg"
            className="d-block figure"
            data-fancybox="gallery"
          >
            <div className="room-image">
              <img src={European} alt="Rooms" />
            </div>
          </a>
          <h3 className="m-1 p-1 room-name text-center">
            <a href="#home">European Rooms</a>
          </h3>
          {/* <span className="text-muted">Interior</span> */}
        </div>
      </div>
    </div>
  </div>
);
