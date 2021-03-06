import React, { useState, useEffect } from 'react';
import Form from './Form';

const Contact = ({ heightOnPage, onSubmit }) => {
  const [isAnimated, setIsAnimated] = useState(0);
  const [el, setEl] = useState('');
  // const [posit, setPosit] = useState('100rem');

  // console.log(heightOnPage)

  useEffect(() => {
    window.addEventListener("scroll", handleElement, false);

    function handleElement() {
      // console.log(window.scrollY)

      if (window.scrollY >= heightOnPage && isAnimated !== 1) {
        setIsAnimated(1);
        // console.log({ True: isAnimated})
        setEl(<Form init={0} anim={1} onSubmit={onSubmit} />)
        // setPosit('-9.5rem')
      } else if (window.scrollY < heightOnPage && isAnimated === 1) {
        setIsAnimated(0);
        // console.log({ False: isAnimated})
        setEl(<Form init={1} anim={0} onSubmit={onSubmit} />)
        // setPosit('100rem')
      }
    }
    return () => {
      window.removeEventListener("scroll", handleElement, false);
    };
  }, [window.scrollY]);

  return (
    <section 
      className='container contact-container vh-100 contact-cont-center' 
      id='contact'
    >
      {el}
    </section>
  );
};

export default Contact;
