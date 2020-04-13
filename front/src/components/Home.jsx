import React from 'react';

import Carousel from '../views/Home/Carousel';
import Services from '../views/Home/Services';
import Partners from '../views/Home/Partners';
import About from '../views/Home/About';
import Contact from '../views/Home/Contact';

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
