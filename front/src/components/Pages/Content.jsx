import React, { useState, useEffect } from 'react';
import '../styles.css';
import Card from './Card';

const Content = ({ heightOnPage }) => {
  const [lastYPod, setLastYPos] = useState(0);

  // Hidden Effect
  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }
    window.addEventListener("scroll", Hand, false);

    console.log(lastYPod, heightOnPage)

    const $part = document.querySelectorAll('.content-container')[0]
    window.addEventListener('scroll', hiddenItem, false)
    function hiddenItem() {
      if (window.scrollY > heightOnPage) {
        $part.classList.remove('notAnim');
        $part.classList.add('Anim');
      } 
      else if (window.scrollY <= heightOnPage) {
        $part.classList.remove('Anim');
        $part.classList.add('notAnim');
      } 
    }

    return () => {
      window.removeEventListener("scroll", Hand, false);
    };

  }, [lastYPod])

  return (
    <section id='content' style={{ backgroundColor: '#4c4646' }} >
      <h1 style={{ color: '#fff', textAlign: "center", paddingTop: '5rem' }} >Look us services</h1>
      <div className='container content-container notAnim' >
        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>

        <div className='row col-md-12' style={{ justifyContent: 'center' }}>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}

export default Content;