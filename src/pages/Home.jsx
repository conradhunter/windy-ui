import React from 'react';
import '../App.css';
import LandingSection from '../components/LandingSection';
import Pricing from '../components/Pricing';
import Testimonals from '../components/Testimonals';

function Home() {
  return (
    <div id='home-page'>
      <LandingSection />
      <Pricing />
      <Testimonals />
    </div>
  );
}

export default Home;
