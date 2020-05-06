import React, { useState, useEffect } from 'react';

const About = ({ heightOnPage }) => {
  const [lastYPod, setLastYPos] = useState(0);

  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }
    window.addEventListener("scroll", Hand, false);

    const $about = document.querySelectorAll('.about-divContainer')[0]
    window.addEventListener('scroll', hiddenItem, false)
    function hiddenItem() {
      if (window.scrollY > heightOnPage) {
        $about.classList.remove('notAnim');
        $about.classList.add('Anim');
      } 
      else if (window.scrollY <= heightOnPage) {
        $about.classList.remove('Anim');
        $about.classList.add('notAnim');
      } 
    }

    return () => {
      window.removeEventListener("scroll", Hand, false);
    };

  }, [lastYPod])

  return (
    <section className='about-container vh-100' id='about'>
      <div className='container about-divContainer notAnim'>
        <div className='row'>
          <h1 className='col-md-5'>
            Sobre ...
          </h1>
          <h4 className='col-md-7'>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit,
            sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit
            in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim
            id est laborum.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default About;
