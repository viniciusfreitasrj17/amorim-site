import React from 'react';
import { hashHistory } from 'react-router';

import More from '../../images/home/mais.png';
import '../styles.css'

const Services = () => {
  const state = {
    imgSrc: {
      one: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1200px-NYCS-bull-trans-1.svg.png',
      two: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png',
      tree: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png',
      four: 'https://www.p4photel.com/ws/red-rounded-with-number-4-hi.png',
      ex: 'https://img.elo7.com.br/product/zoom/B65B02/quadro-decorativo-outono-laranja-quadro-floral.jpg'
    }
  }

  return (
    <section className='services-container container col-md-12' id='services'>
      <div className='row' >
        <div className="services-itens col-12 col-md-6"> 
          <button className='services-link-img' onClick={() => hashHistory.push('/page1')} >
            <img className='services-img-big' src={state.imgSrc.one} /> 
          </button>
        </div>

        <div className='services-itens col-12 col-md-6 service-itens-group' >
          <div className='row'>
            <div className="services-itens col-6 col-md-6"> 
              <button className='services-link-img' onClick={() => hashHistory.push('/page2')} >
                <img className='services-img-small' src={state.imgSrc.two} /> 
              </button>
            </div>
            <div className="services-itens col-6 col-md-6"> 
              <button className='services-link-img' onClick={() => hashHistory.push('/page3')} >
                <img className='services-img-small' src={state.imgSrc.tree} /> 
              </button>
            </div>
          </div>
          <div className='row'>
            <div className="services-itens col-md-6 services-ghost"></div>
            <div className="services-itens col-md-6 services-ghost"></div>
          </div>
          <div className='row'>
            <div className="services-itens col-6 col-md-6"> 
              <button className='services-link-img' onClick={() => hashHistory.push('/page4')} >
                <img className='services-img-small' src={state.imgSrc.four} /> 
              </button>
            </div>
            <div className="services-itens col-6 col-md-6"> 
              <button className='services-link-img' onClick={() => hashHistory.push('/pagex')} >
              <img className='services-img-small' src={More} />   
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Services;
