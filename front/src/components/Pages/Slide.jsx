import React, { useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const Slide = ({ actionSlide, imgSrc, imgCurrent }) => { 
  useEffect(() => {
    const $slide = document.querySelectorAll('.slide-container')[0]
    // window.addEventListener('scroll', hiddenItem, false)
    // console.log(isAnimated)
    function hiddenItem() {
      // if (isOpen) {
        $slide.classList.remove('notVisibility');
        $slide.classList.add('Visibility');
        $slide.classList.remove('notAnim');
        $slide.classList.add('Anim');
      // } 
      // else if (!isOpen) {
      //   $slide.classList.remove('Anim');
      //   $slide.classList.add('notAnim');
      //   $slide.classList.remove('Visibility');
      //   $slide.classList.add('notVisibility');
      // } 
    }

    hiddenItem()
  }, [])

  const closeSlide = () => actionSlide();
  
  return (
    <>
      <div className="slide-blackout" onClick={closeSlide}></div>
      <section className='slide-container notVisibility notAnim'>

        <button className='slide-buttom-close' onClick={closeSlide}>
          <IoMdCloseCircle className='slide-icon-close' />
        </button>

        <div id="carouselExampleIndicators" className="carousel slide carousel-fade slide-img-group" data-ride="carousel" data-interval="false">
          <div className="carousel-inner slide-img-group">
            {imgSrc.map((content, index) => (
              <div 
                key={index} 
                className={`carousel-item slide-img ${(imgCurrent === index) ? 'active' : ''}`}
                style={{ backgroundImage: `url('${content}')` }}
              ></div>
            ))}
          </div>
          
          <a className="carousel-control-prev" style={{ width: '10%' }} href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" style={{ width: '10%' }} href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    </>
  );
}

export default Slide;
