import React from 'react';

import Carousel from '../components/Home/Carousel';
import Services from '../components/Home/Services';
import Partners from '../components/Home/Partners';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const Home = () => {

  return (
    <>
      <Carousel />
      <Services />
      <Partners />
      <About />
      <Contact />
    </>
  );
}

export default Home;
