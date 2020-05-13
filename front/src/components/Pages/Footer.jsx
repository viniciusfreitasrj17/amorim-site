import React, { useState, useEffect } from 'react';
import { hashHistory } from 'react-router';

import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { AiOutlineWhatsApp, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';


const Footer = ({ heightOnPage }) => {
  const [lastYPod, setLastYPos] = useState(0);

  // Hidden Effect
  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }
    window.addEventListener("scroll", Hand, false);

    // console.log(lastYPod, heightOnPage)

    const $part = document.querySelectorAll('.footer-container')[0]
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

  return (
    <section id='footer' className='footer-container container notAnim'>
      <div className='row'>
        <div className="col-md-6 row">
          <div className="col-md-6">
            <h3 className='footer-group-title' >Página Inicial</h3>
            <a className='footer-link-a' onClick={() => hashHistory.push('/')} ><MdKeyboardArrowRight size={25} /> Home</a>
          </div>
          <div className="col-md-6">
            <h3 className='footer-group-title' >Serviços</h3>
            <div className="footer-group-link">
              <a className='footer-link-a' onClick={() => hashHistory.push('/page1')} ><MdKeyboardArrowRight size={25} /> Page 1</a>
              <a className='footer-link-a' onClick={() => hashHistory.push('/page2')} ><MdKeyboardArrowRight size={25} /> Page 2</a>
              <a className='footer-link-a' onClick={() => hashHistory.push('/page3')} ><MdKeyboardArrowRight size={25} /> Page 3</a>
              <a className='footer-link-a' onClick={() => hashHistory.push('/page4')} ><MdKeyboardArrowRight size={25} /> Page 4</a>
              <a className='footer-link-a' onClick={() => hashHistory.push('/pageX')} ><MdKeyboardArrowRight size={25} /> Page X</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 footer-group-redes">
          <h3 className='footer-group-title' >Siga-nos em nossas Redes Sociáis</h3>
	  <div className='footer-group-redes-container col-md-9'>
	  <ul className='footer-group-redes-ul'>
	    <li className='footer-group-redes-li'><a className='footer-group-redes-a' href="#"> <FaFacebookF className='footer-group-rede-icon' /> </a></li>
	    <li className='footer-group-redes-li'><a className='footer-group-redes-a' href="#"> <AiOutlineWhatsApp className='footer-group-rede-icon' /> </a></li>
	    <li className='footer-group-redes-li'><a className='footer-group-redes-a' href="#"> <AiFillYoutube className='footer-group-rede-icon' /> </a></li>
	    <li className='footer-group-redes-li'><a className='footer-group-redes-a' href="#"> <AiFillLinkedin className='footer-group-rede-icon' /> </a></li>
	    <li className='footer-group-redes-li'><a className='footer-group-redes-a' href="#"> <FaInstagram className='footer-group-rede-icon' /> </a></li>
	  </ul>
	  </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
