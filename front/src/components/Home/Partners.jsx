import React from 'react';

import '../styles.css'
import '../../util/slick/slick.css';
import '../../util/slick/slick-theme.css';

import Slider from "react-slick";

const Partners = () => {
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map(num => (
      <div className='App'>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        dots={false}
        slidesToShow={2}
        slidesToScroll={2}
        autoplay={true}
        autoplaySpeed={3000}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
};

export default Partners;
