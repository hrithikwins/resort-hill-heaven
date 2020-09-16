import React, { useState } from 'react';
import { Navigation } from './views/nav/navigation';
import { TopNav } from './views/nav/top-nav';
import { Banner } from './views/header/banner';
import { Features } from './views/header/features';
import { AboutSection } from './views/section/about-section';
import { ContactSection } from './views/section/contact-section';
import { FaqSection } from './views/section/faq-section';
import { FeaturesSection } from './views/section/features-section';
import { PricingChartSection } from './views/section/pricing-chart-section';
import { RoomsSection } from './views/section/rooms-section';
import { Footer } from './views/footer/footer';
import { PricingSection } from './views/section/pricing-section';
import { SocialSection } from './views/section/social-section';
import { GallerySection } from './views/section/gallery-section';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Guidelines } from 'views/section/guidelines-section';
import {HamburgerMenu} from 'react-hamburger-menu';

function App() {
  const [open,setOpen] = useState(false);
  return (
    <>
      {/* <div id="overlayer" /> */}
      {/* <div className="loader">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}
      {/* <HamburgerMenu
        isOpen={open}
        menuClicked={setOpen(true)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color='black'
        borderRadius={0}
        animationDuration={0.5}
      /> */}
      <div className="site-wrap">
        <Router>
          <Switch>
            <Route path="/gallery">
              <TopNav />
              <Navigation />
              <div class="blank-top" />
              <GallerySection />
              <Footer />
            </Route>
          </Switch>
          <Switch>
            <Route path="/">
              <TopNav />
              <Navigation />
              <Banner />
              <marquee><span aria-label="warning">⚠</span>Due to COVID 19 safety measures, outside food is not allowed</marquee>
              <Features />
              <AboutSection />
              <FeaturesSection />
              <RoomsSection />
              <FaqSection />
              <PricingChartSection />
              <PricingSection />
              <ContactSection />
              {/* <SocialSection /> */}
              <Guidelines/>
              <Footer />
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;



