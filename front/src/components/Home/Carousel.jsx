import React from 'react';
import '../styles.css';

const Carousel = () => {

    const state = {
        imgInterval: 3000,
        imgSrc: [
            'https://www.casadebateriasoliveira.com.br/imagens/banner-home/banner-3.jpg',
            'http://transnatural.com.br/img/slider/slide11.jpg',
            'http://transnatural.com.br/img/slider/slide14.jpg',
            'http://transnatural.com.br/img/slider/slide15.jpg',
            'https://i.pinimg.com/564x/d9/5b/c0/d95bc01ce95cee37bf12eab8051f73c9.jpg'
        ]
    }

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval={state.imgInterval} >
                    <img src={state.imgSrc[0]} className="d-block w-100 carousel-itemImg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval={state.imgInterval} >
                    <img src={state.imgSrc[1]} className="d-block w-100 carousel-itemImg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval={state.imgInterval} >
                    <img src={state.imgSrc[2]} className="d-block w-100 carousel-itemImg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval={state.imgInterval} >
                    <img src={state.imgSrc[3]} className="d-block w-100 carousel-itemImg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div className="carousel-item" data-interval={state.imgInterval} >
                    <img src={state.imgSrc[4]} className="d-block w-100 carousel-itemImg" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
