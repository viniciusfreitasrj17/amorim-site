import React from 'react';

import '../styles.css'

const Services = () => {
  const state = {
    imgSrc: [
      'https://img.elo7.com.br/product/zoom/B65B02/quadro-decorativo-outono-laranja-quadro-floral.jpg'
    ],
    imgBigStyle: {
      width: '250px',
      height: '250px',
    },
    imgSmallStyle: {
      width: '100px',
      height: '100px',
    }
  }

  return (
    <section className='services-container container vh-100' id='services'>
      <div className='row' >
        <div className="services-itens col-12 col-md-6"> <img style={state.imgBigStyle} src={state.imgSrc[0]} /> </div>

        <div className='services-itens col-12 col-md-6 service-itens-group' >
          <div className='row'>
            <div className="services-itens col-6 col-md-6"> <img style={state.imgSmallStyle} src={state.imgSrc[0]} /> </div>
            <div className="services-itens col-6 col-md-6"> <img style={state.imgSmallStyle} src={state.imgSrc[0]} /> </div>
          </div>
          <div className='row'>
            <div className="services-itens col-md-6 services-ghost"></div>
            <div className="services-itens col-md-6 services-ghost"></div>
          </div>
          <div className='row'>
            <div className="services-itens col-6 col-md-6"> <img style={state.imgSmallStyle} src={state.imgSrc[0]} /> </div>
            <div className="services-itens col-6 col-md-6"> <img style={state.imgSmallStyle} src={state.imgSrc[0]} /> </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Services;
