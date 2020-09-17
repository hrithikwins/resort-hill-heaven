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
import { GallerySection } from './views/section/gallery-section';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Guidelines } from 'views/section/guidelines-section';

function App() {
  return (
    <>
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
            <Route path="/home">
              <TopNav />
              <Navigation />
              <Banner />
              <marquee className="text-orangered"><span aria-label="warning">⚠</span>Due to COVID 19 safety measures, outside food is not allowed</marquee>
              <AboutSection />
              <Features />
              <RoomsSection />
              <FeaturesSection />
              <PricingChartSection />
              <PricingSection />
              <FaqSection />
              <ContactSection />
              {/* <SocialSection /> */}
              <Guidelines/>
              <Footer />
            </Route>
            <Route exact path="/">
              <Redirect to="/home"/>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;



