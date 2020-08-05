import React from 'react';
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

function App() {
  return (
    <>
      <div id="overlayer" />
      <div className="loader">
        {/* <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div> */}
      </div>
      <div className="site-wrap">
        <TopNav />
        <Navigation />
        <Banner />
        <Features />
        <AboutSection />
        <FeaturesSection />
        <RoomsSection />
        <PricingChartSection />
        <FaqSection />
        <GallerySection />
        <PricingSection />
        <ContactSection />
        <SocialSection />
        <Footer />
      </div>
    </>
  );
}

export default App;