import React, { useState, useEffect } from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

const Slide = ({ active, imgSrc, imgCurrent }) => {
  // const [close, setClose] = useState(false);
  const [isAnimated, setAnimated] = useState(active ? true : false);
  const [a, setA] = useState(0);
  
  useEffect(() => {
    const $slide = document.querySelectorAll('.slide-container')[0]
    // window.addEventListener('scroll', hiddenItem, false)
    // console.log(imgCurrent)
    function hiddenItem() {
      if (isAnimated) {
        $slide.classList.remove('notVisibility');
        $slide.classList.add('Visibility');
        $slide.classList.remove('notAnim');
        $slide.classList.add('Anim');
      } 
      else if (!isAnimated) {
        $slide.classList.remove('Anim');
        $slide.classList.add('notAnim');
        $slide.classList.remove('Visibility');
        $slide.classList.add('notVisibility');
      } 
    }

    if(isAnimated) hiddenItem()
  }, [isAnimated])

  function closeSlide() {
    console.log('1 ', a)
    setA(1)
    setTimeout(() => console.log('2 ', a), 2000)
  }
  
  return (
      <section className='slide-container notVisibility notAnim'>
        <button className='slide-buttom-close' onClick={closeSlide}>
          <IoMdCloseCircle className='slide-icon-close' />
        </button>

        <div id="carouselExampleIndicators" className="carousel slide carousel-fade slide-img-group" data-ride="carousel" data-interval="false">
          <div className="carousel-inner slide-img-group">
            {imgSrc.map((content, index) => (
              <div 
                key={index} 
                className={`carousel-item ${(imgCurrent === index) ? 'active' : ''}`}
              >
                <img className="d-block slide-img" src={content} alt="..." />
              </div>
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
  );
}

export default Slide;
