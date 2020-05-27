import React from 'react';
import imgSrc from '../../images/page1/63.jpg';

const Intro = () => {
  const styleText = {
    color: '#fff', fontSize: '2rem', paddingTop: '.7'
  }

  return (
    <section id='carousel' style={{ width: '100%' }} >
      <div 
        className="intro-background" 
        style={{  backgroundImage: `url(${imgSrc})` }}
      >
        <div>
          <h5 style={styleText}>Enter with your text here</h5>
          <h5 style={styleText}>The place for expand your mind</h5>
        </div>
      </div>
    </section>
  );
};

export default Intro;
