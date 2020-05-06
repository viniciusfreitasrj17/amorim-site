import React, { useState, useEffect } from 'react';

const About = ({ heightOnPage }) => {
  const [lastYPod, setLastYPos] = useState(0);
  const [a, setA] = useState(0)

  const transition = { transition: 'opacity .7s ease-out' }

  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }
    window.addEventListener("scroll", Hand, false);

    const $about = document.querySelectorAll('.about-text')[0]
    const $tx1 = document.querySelectorAll('.text1')[0]
    const $tx2 = document.querySelectorAll('.text2')[0]
    const $tx3 = document.querySelectorAll('.text3')[0]
    const $tx4 = document.querySelectorAll('.text4')[0]
    window.addEventListener('scroll', hiddenItem, false)
    function hiddenItem() {
      if (window.scrollY > heightOnPage && $about.classList.contains('notAnim')) {
        setA(a + 1)
        console.log(a)
        if (a === 1) {
          setTimeout(() => {
            $about.classList.remove('notAnim');
            $about.classList.add('Anim');
          }, 100)
          setTimeout(() => {
            $tx1.classList.remove('notAnim');
            $tx1.classList.add('Anim');
          }, 1000)
          setTimeout(() => {
            $tx2.classList.remove('notAnim');
            $tx2.classList.add('Anim');
          }, 2000)
          setTimeout(() => {
            $tx3.classList.remove('notAnim');
            $tx3.classList.add('Anim');
          }, 3000)
          setTimeout(() => {
            $tx4.classList.remove('notAnim');
            $tx4.classList.add('Anim');
          }, 4000)
        }
      }
      else if (window.scrollY <= heightOnPage && $about.classList.contains('Anim')) {
        setA(0);
        console.log(a)
        if (!a) {
          $about.classList.remove('Anim');
          $about.classList.add('notAnim');
          $tx1.classList.remove('Anim');
          $tx1.classList.add('notAnim');
          $tx2.classList.remove('Anim');
          $tx2.classList.add('notAnim');
          $tx3.classList.remove('Anim');
          $tx3.classList.add('notAnim');
          $tx4.classList.remove('Anim');
          $tx4.classList.add('notAnim');
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", Hand, false);
    };

  }, [lastYPod])

  return (
    <section className='about-container vh-100' id='about'>
      <div className='container'>
        <div className='row'>
          <h1 
            className='about-text notAnim col-md-5'
            style={transition}
          >
            Sobre ...
          </h1>
          <div className='col-md-7'>
            <h4 className='text1 notAnim' style={transition} >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.
            </h4>

            <h4 className='text2 notAnim' style={transition} >
              Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </h4>

            <h4 className='text3 notAnim' style={transition} >
              Duis aute irure dolor in reprehenderit
              in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur.
            </h4>

            <h4 className='text4 notAnim' style={transition} >
              Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim
              id est laborum.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
