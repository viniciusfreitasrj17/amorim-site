import React from 'react';

import '../styles.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Partners = () => {
  const settings = {
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false
      // accessibility: false
    };

  const state = {
    imgSrc: [
      'https://logodownload.org/wp-content/uploads/2016/08/Mercado-Livre-logo.png',
      'https://marcas-logos.net/wp-content/uploads/2019/12/Heineken-Logo.png',
      'https://marcas-logos.net/wp-content/uploads/2019/11/Spotify-Logo.png',
      'https://pt.freelogodesign.org/Content/img/logo-samples/celtica.png',
      'https://www.vintecontologos.com.br/wp-content/uploads/2017/08/Coca-Cola-Logo-600x282.png.webp',
      'https://www.vintecontologos.com.br/wp-content/uploads/2017/08/logo-subway-600x172.png',
      'https://marcas-logos.net/wp-content/uploads/2019/12/PayPal-Logo.png',
      'https://logodownload.org/wp-content/uploads/2014/05/vale-logo-3.png',
      'https://logodownload.org/wp-content/uploads/2018/08/aurora-logo-2.png'
    ]
  }
    return (
      <section className='container partners-container'>
        <h1 className='partners-title'>Conheça nossos Parceiros</h1>
        <Slider {...settings}>
         <div>
           <img src={state.imgSrc[0]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[1]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[2]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[3]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[4]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[5]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[6]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[7]} className='partners-slide' />
         </div>
         <div>
           <img src={state.imgSrc[8]} className='partners-slide' />
         </div>
       </Slider>
     </section>
  );
};

export default Partners;
