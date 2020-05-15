import React, { useState, useEffect } from 'react';

import Card from './Card';
import Slide from './Slide';

import '../styles.css';

const Content = ({ heightOnPage }) => {
  const divDefault = { display: 'contents' }

  const [lastYPod, setLastYPos] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);
  const [el, setEl] = useState('');
  const [imgCurrent, setImgCurrent] = useState(0);

  const imgSrc = [
    ['https://image.flaticon.com/icons/svg/789/789395.svg'],
    ['https://img.ibxk.com.br/2017/07/13/13160112901226.jpg'],
    ['https://cleber.net/sites/default/files/images/posts/photoshop/original-4-3.jpg'],
    ['https://thumbs.dreamstime.com/b/imagem-de-fundo-bonita-do-c%C3%A9u-da-natureza-64743160.jpg'],
    ['https://cmd.mg.gov.br/wp-content/uploads/2018/08/cartaz-final-1-1.jpg'],
    ['data:image/jpeg;base64,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'],
    ['http://bsnscb.com/data/out/82/40159224-full-hd-wallpapers.jpeg'],
    ['http://www.chumbogordo.com.br/wp-content/uploads/2018/07/futbol-tur-paketleri-y_1513761512.jpg'],
    ['https://d26lpennugtm8s.cloudfront.net/stores/746/397/products/maca-argentina1-a86acef532d11addf315221676880019-480-0.jpg']
  ];

  // Hidden Effect
  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }
    window.addEventListener("scroll", Hand, false);

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

  useEffect(() => {
    if(isAnimated) {
      setEl(<Slide active={true} imgSrc={imgSrc} imgCurrent={imgCurrent} />)
    }
  }, [isAnimated])

  // function handleSlide(e) {
  //   e.preventDefault();
  useEffect(() => {
    const $div = document.querySelectorAll('#content-divImg');
    $div.forEach(element => {
      element.addEventListener('click', (event) => {
        setImgCurrent(parseInt(element.getAttribute('data-image')))
        setIsAnimated(true);
        return; 
      })
    })

  }, [])


    // console.log($div.getAttribute('data-image'))
    // console.log($div)
  // }

  return (
    <section id='content' style={{ backgroundColor: '#4c4646' }} >
      {el}
      {/* <Slide active={true} />  */}
      <h1 style={{ color: '#fff', textAlign: "center", paddingTop: '5rem' }} >Look us services</h1>
      <div className='container content-container notAnim' >
        <div className='col-md-12 row' style={{ justifyContent: 'center' }}>
          {imgSrc.map((content, index) => (
            <div 
              key={index} 
              // onClick={handleSlide} 
              className='col-md-4' 
              style={divDefault}
              id='content-divImg'
              data-image={index}
            >
              <Card img={content} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Content;