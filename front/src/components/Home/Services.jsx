import React from 'react';
import { hashHistory } from 'react-router';

import More from '../../images/home/mais.png';
import '../styles.css'

const Services = () => {
  const imgSrc = new Map([
    [1, 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NYCS-bull-trans-1.svg/1200px-NYCS-bull-trans-1.svg.png'],
    [2, 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/NYCS-bull-trans-2.svg/1200px-NYCS-bull-trans-2.svg.png'],
    [3, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/NYCS-bull-trans-3.svg/1200px-NYCS-bull-trans-3.svg.png'],
    [4, 'https://www.p4photel.com/ws/red-rounded-with-number-4-hi.png'],
    ['more', 'https://img.elo7.com.br/product/zoom/B65B02/quadro-decorativo-outono-laranja-quadro-floral.jpg']
  ])

  return (
    <section className='services-container container col-md-12' id='services'>
      <div className='row col-md-12' >
        <div className="services-itens col-12 col-md-6 service-img-mobile">
          <button className='services-link-img' onClick={() => hashHistory.push('/page1')} >
            <div className="card service-card-big" >
              <img className="card-img-top" src={imgSrc.get(1)} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">Title</p>
              </div>
            </div>
          </button>
        </div>

        <div className='services-itens col-12 col-md-6 service-itens-group' >
          <div className='row'>
            <div className="services-itens col-6 col-md-6">
              <button className='services-link-img' onClick={() => hashHistory.push('/page2')} >
                {/* <img className='services-img-small' src={imgSrc.get(2)} /> */}
                <div className="card service-card-small" >
                  <img className="card-img-top services-img-small" src={imgSrc.get(2)} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Title</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="services-itens col-6 col-md-6">
              <button className='services-link-img' onClick={() => hashHistory.push('/page3')} >
                {/* <img className='services-img-small' src={imgSrc.get(3)} /> */}
                <div className="card service-card-small" >
                  <img className="card-img-top services-img-small" src={imgSrc.get(3)} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Title</p>
                  </div>
                </div>
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
                {/* <img className='services-img-small' src={imgSrc.get(4)} /> */}
                <div className="card service-card-small" >
                  <img className="card-img-top services-img-small" src={imgSrc.get(4)} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Title</p>
                  </div>
                </div>
              </button>
            </div>
            <div className="services-itens col-6 col-md-6">
              <button className='services-link-img' onClick={() => hashHistory.push('/pagex')} >
                {/* <img className='services-img-small' src={More} /> */}
                <div className="card service-card-small" >
                  <img className="card-img-top services-img-small" src={More} alt="Card image cap" />
                  <div className="card-body">
                    <p className="card-text">Title</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Services;
