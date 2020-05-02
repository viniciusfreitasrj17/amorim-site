import React from 'react';
import '../styles.css';

const Carousel = () => {

    const state = {
        imgInterval: 3000,
        imgSrc: [
            'https://media.semprefamilia.com.br/semprefamilia/2019/11/humildade-em-familia-620x349-61b59400.png',
            'https://i.pinimg.com/originals/56/ee/7f/56ee7f155e22cd1394616e0d4ef8a98d.jpg',
            'https://www.expositorcristao.com.br/content/interfaces/cms/userfiles/files/familia-ec.jpg',
            'https://abrilveja.files.wordpress.com/2017/06/istock-grupo-idosos.jpg',
            'https://i.pinimg.com/originals/56/ee/7f/56ee7f155e22cd1394616e0d4ef8a98d.jpg'
        ]
    }

    return (
        <div id='carousel'>
        <section id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
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
            <a className="carousel-control-prev" style={{width: '7%'}} href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" style={{width: '7%'}} href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </section>
        </div>
    );
}

export default Carousel;
