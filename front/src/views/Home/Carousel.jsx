import React from 'react';
import '../styles.css';

const Carousel = () => {

    const styles = {
        imgItem: {
            paddingTop: '1px', 
            height: '450px'
        },
        imgInterval: 3000
    }

    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item img-carousel-item active" data-interval={styles.imgInterval} >
                    <img style={styles.imgItem} src="https://i.pinimg.com/564x/29/4d/af/294daf5eb983bb37161c45ffa92a5595.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item img-carousel-item" data-interval={styles.imgInterval} >
                    <img style={styles.imgItem} src="https://images.squarespace-cdn.com/content/59af2189c534a58c97bd63b3/1552051899416-ICKT30INPDD8ZUVMEDCF/Rage+of+the+Dark+Wood+loading+screen+Lone+Druid+Dota.jpg?content-type=image%2Fjpeg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item img-carousel-item" data-interval={styles.imgInterval} >
                    <img style={styles.imgItem} src="https://i.pinimg.com/564x/92/a6/24/92a62448e8093ed9138f88727e539c3a.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item img-carousel-item" data-interval={styles.imgInterval} >
                    <img style={styles.imgItem} src="https://i.pinimg.com/originals/6a/66/2a/6a662a7cc407104c3f626a1e06c25469.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
                <div class="carousel-item img-carousel-item" data-interval={styles.imgInterval} >
                    <img style={styles.imgItem} src="https://i.pinimg.com/564x/d9/5b/c0/d95bc01ce95cee37bf12eab8051f73c9.jpg" class="d-block w-100" alt="..." />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>...</h5>
                        <p>...</p>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Carousel;
