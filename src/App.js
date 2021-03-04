import React, { Suspense, useEffect } from "react";
import { Navigation } from "./views/nav/navigation";
import { TopNav } from "./views/nav/top-nav";
import { Banner } from "./views/header/banner";
import { Features } from "./views/header/features";
import { AboutSection } from "./views/section/about-section";
import { ContactSection } from "./views/section/contact-section";
import { FaqSection } from "./views/section/faq-section";
import { FeaturesSection } from "./views/section/features-section";
import { PricingChartSection } from "./views/section/pricing-chart-section";
import { RoomsSection } from "./views/section/rooms-section";
import { Footer } from "./views/footer/footer";
import { PricingSection } from "./views/section/pricing-section";
import { GallerySection } from "./views/section/gallery-section";
import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Guidelines } from "views/section/guidelines-section";
import { AboutPage } from "views/pages/about-page";
import ScrollToTop from "views/pages/scroll-to-top";
import useSound from "use-sound";
import backgroundMusic from "../src/songs/bensound-tenderness.mp3";
// import { SocialSection } from "views/section/social-section";

// const GallerySection = React.lazy(() => import("views/section/gallery-section.jsx"));
function App() {
  const [play] = useSound(backgroundMusic, { volume: 0.7 });
  useEffect(() => {
    play();
  }, []);
  return (
    <>
      <div className="site-wrap">
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <ScrollToTop />
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
                <div className="marquee">
                  <p className="text-orangered">
                    <span aria-label="warning">⚠</span>Due to COVID 19 safety
                    measures, outside food &amp; Drinks are not allowed. Please
                    bring a valid id-proof (containing address) when you visit
                    Heaven Hill Resort
                  </p>
                </div>
                <AboutSection />
                <FeaturesSection />
                <RoomsSection />
                <Features />
                <PricingChartSection />
                <Guidelines />
                <ContactSection />
                <PricingSection />
                {/* <SocialSection /> */}
                <FaqSection />
                <Footer />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/about-page">
                <TopNav />
                <Navigation />
                <div class="blank-top" />
                <AboutPage />
                <Footer />
              </Route>
              <Redirect to="/home" />
            </Switch>
          </Router>
        </Suspense>
      </div>
    </>
  );
}

export default App;
