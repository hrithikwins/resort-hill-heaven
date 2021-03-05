import React from 'react';
import OctopusRainDance from "images/gallery/img11.jpg";
import picnicSpot from "images/features/picnic.jpg";
import rooms from "images/rooms/european.jpg";
import groupEntries from "images/features/group-entries.jpg";
import parking from "images/features/parking.jpg";
import vegNonVeg from "images/features/veg-non-veg.jpg";

export const FeaturesSection = () => (
  <div className="site-section" id="features-section">
    <div className="container">
      <div className="row text-center justify-content-center">
        <div className="col-md-7 text-center">
          <span className="sub-title">Features of Heaven Hill Resort</span>
          <h2 className="font-weight-bold text-black">
            Experience at Heaven hill Resort
          </h2>
          <p className="mb-5">
            Some experiences are worth experiencing, we at Heaven Hill Resort
            aim at providing our visitors the best treatment we can ever give. A
            feel as comfortable and friendly like home.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-interior-design display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={OctopusRainDance}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Octopus Rain Dance</h5>
              Heaven Hill Resort has Octopus Rain Dance. Come and Enjoy Rain
              Dance at Heaven Hill Resort.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-step-ladder display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={picnicSpot}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Amazing Picnic Spot</h5>
              Heaven hill resort has awesome picnic spot
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-turned-off display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={rooms}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Clean Rooms</h5>
              Heaven Hill Resort has some of the finest and well-trained room
              services which ensures cleanliness in your living.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-window display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={groupEntries}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Group Entries Discount</h5>
              We believe the real fun and adventure is useless without our loved
              ones. Enjoy your day with friends, family and loved ones.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-measuring display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={parking}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Secured Parking Space</h5>
              Heaven Hill Resort has ample Parking Space and secured parking
              with trust.
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-5">
          <div className="media custom-media">
            <div className="mr-3 icon">
              <span className="flaticon-sit-down display-4" />
            </div>
            <div className="media-body">
              <img
                style={{ maxWidth: "100%", maxHeight : "200px", minHeight: "180px" }}
                src={vegNonVeg}
                alt="Octopus Rain Dance"
              />
              <h5 className="mt-0 text-orangered pt-2">Veg and Non-Veg Food separately</h5>
              We at Heaven Hill Resort believe your food is the ultimate way to
              reach your soul. So we maintain the absolute hygiene and
              cleanliness everywhere.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);