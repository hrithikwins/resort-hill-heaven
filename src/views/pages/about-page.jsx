import React from "react";
import AboutPageImage from "images/gallery/img2.jpg";
import LocationImage from "images/pages/highway.jpeg";
import FoodImage from "images/pages/about-food.jpeg";
import RoomsImage from "images/gallery/img13.jpg";
import "views/pages/about-page.sass";
export const AboutPage = () => (
  <>
    <div id="about-page"></div>
    <div className="p-1">
      <div className="about-page container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="p-3 card-block about-main-block">
              <div className="col-md-12 text-center">
                <span className="sub-title">About heaven hill resort</span>
                <h2 className="font-weight-bold text-black">
                  HEAVEN HILL RESORT
                </h2>
              </div>
              <br />
              <br />
              <div className="d-block">
                <span className="">
                  <img
                    src={AboutPageImage}
                    alt="heaven hill about"
                    align="left"
                  />
                  <p>
                    Heaven Hill Resort is a paradise on the Earth, amongst the
                    lakes and hills, is an ideal place to be on vacation to live
                    your life to the maximum laying among nature. We are located
                    amongst the hills of historical importance, where trekking
                    is not just a sport, its an expensive adventurous experience
                    to be remembered for life. The natural lake collects the
                    purest rainwater and stores them around the year. A wide
                    collection of varied species of indigenous plants and trees
                    of fruit-bearing and non-fruit-bearing plants gives you an
                    all round experience and knowledge of botanical plants.
                  </p>
                  <p>
                    Apart from being a part of nature amongst nature, what makes
                    us different is our welcoming-home culture and attitude. We
                    believe and try to keep alive the saying 'Atithi Devo Bhava'
                    which we have learned from our ancestors and observed our
                    elders following it till day with all their might. To us,
                    each and every one of our visitors worshipped from the core
                    of our hearts and we try to serve them in the best way
                    possible.
                  </p>
                </span>
              </div>
            </div>
            <div />
          </div>
        </div>
        <div className="row about-features">
          <div className="col-md-4 p-1 bg-transparent">
            <div className="card card-body shadow-sm">
              <h2 className="text-orangered">Location</h2>
              <img src={LocationImage} alt="Location" />
              <p>
                <span>
                  The awesomeness of our resort resides in its location which
                  ensures a quick reach from anywhere, be it Mumbai or Gujarat
                  NH-48 got you covered. Just 4kms from NH-48, Heaven Hill
                  Resort, a paradise that helps you unwind, relax and pamper
                  your senses. You will definitely experience a whole next level
                  of comfort and joy at Heaven Hill Resort
                </span>
              </p>
              <p>
                <a className="btn text-orangered" href="#heaven-hill-map">
                  Locate on Map »
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 p-1 bg-transparent">
            <div className="card card-body shadow-sm">
              <h2 className="text-orangered">Food</h2>
              <img src={FoodImage} alt="food" />

              <p>
                We've got the best of chefs who have over the years served
                hundreds of people with happiness and have and their sense of
                taste and cuisine is at a whole next level. The food at Heaven
                Hill Resort is just extraordinarily Home Made food with Veg and
                Non-veg foods prepared and served differently.
              </p>
              <p>
                <a className="btn" href="#about-page-menu">
                  Explore Menu »
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-4 p-1 bg-transparent">
            <div className="card card-body shadow-sm">
              <h2 className="text-orangered">Rooms</h2>
              <img src={RoomsImage} alt="Rooms" />
              <p>
                Living amongst nature is the best deal ever. We bring you a wide
                variety of well-furnished rooms which are well ventilated and
                air-conditioned too. We offer you privacy and security amongst
                nature. We ensure good room service to help you be comfortable
                and feel no different than your home.
              </p>
              <p>
                <a className="btn" href="/home#rooms-section">
                  Room Images »
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center p-2">Watch Heaven Hill Resort's Youtube Videos</h1>
        <div className="row">

         <div id="youtube-videos" className="col-md-4 p-4 "><iframe src="https://www.youtube.com/embed/DqNenlPtXUA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div id="youtube-videos" className="col-md-4 p-4 "><iframe src="https://www.youtube.com/embed/HCGk9ISywo8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
      <div id="youtube-videos" className="col-md-4 p-4 "><iframe src="https://www.youtube.com/embed/CehtZFq_uvo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
        </div>
      <div id="heaven-hill-map" className="text-center">
        
      </div>
     <h2>Locate us on Map</h2>
      </div>
      <div className="heaven-hill-map">
        <iframe
          width="{1080}"
          height="{777}"
          title="heaven hill google map"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=heaven%20hill%20resort&t=k&z=11&ie=UTF8&iwloc=&output=embed"
          frameBorder="{0}"
          scrolling="no"
          marginHeight="{0}"
          marginWidth="{0}"
        >
        </iframe>
      </div>
    </div>
  </>
);
