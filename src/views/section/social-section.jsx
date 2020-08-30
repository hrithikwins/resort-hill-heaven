import React from "react";
import facebookSnip from 'images/fb_snip.png';
import instaSnip from 'images/insta_snip.png';

export const SocialSection = () => (
    <>
        <div className="row">
            <div class="col-md-6 col-sm-6 instaFollow">
                <h2>Follow Heaven Hill Resort for latest updates</h2>
                <a href="https://www.instagram.com/heaven_hill_resort">
                    <img src={instaSnip} alt="instagram" />
                </a>
            </div>
            <div class="col-md-6 col-sm-6 facebookFollow">
                <a href="https://www.facebook.com/heavenhillagro1">
                    <img src={facebookSnip} alt="facebook"/>
                </a>
            </div>
        </div>
    </>
);