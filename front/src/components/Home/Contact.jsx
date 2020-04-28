import React, { useState, useEffect } from 'react';
import Form from './Form';

const Contact = ({ heightHalf, heightOnPage }) => {
  const [isAnimated, setIsAnimated] = useState(0);
  const [el, setEl] = useState('');

  console.log(heightOnPage[4])

  useEffect(() => {
    window.addEventListener("scroll", handleElement, false);
    
    function handleElement() {
      console.log(window.scrollY)

      if (window.scrollY >= heightOnPage[4] && isAnimated !== 1) {
        setIsAnimated(1);
        // console.log({ True: isAnimated})
        setEl(<Form init={0} anim={1} />)
      } else if (window.scrollY < heightOnPage[4] && isAnimated == 1) {
        setIsAnimated(0);
        // console.log({ False: isAnimated})
        setEl(<Form init={1} anim={0} />)
      }
    }
    return () => {
      window.removeEventListener("scroll", handleElement, false);
    };
  }, [window.scrollY]);
  
  return (
    <section className='container contact-container vh-100 contact-cont-center' id='contact'>
      {el}
    </section>
  );
};

export default Contact;
