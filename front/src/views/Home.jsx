import React, {useEffect, useState} from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../components/NavBar';
import Carousel from '../components/Home/Carousel';
import Services from '../components/Home/Services';
import Partners from '../components/Home/Partners';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const Home = () => {
  const [lastYPod, setLastYPos] = useState(0);
  const c = ['navbar', 'carousel', 'services', 'partners', 'about', 'contact'];
  const [heightOnPage, setHeightOnPage] = useState([]);
  const [heightHalf, setHeightHalf] = useState(0);
  
  useEffect(() => {
    function Hand() {
      const a = window.scrollY
      setLastYPos(a)
    }

    window.addEventListener("scroll", Hand, false);

    const heightEach = c.map(
      c => document.getElementById(c).clientHeight
    )

    let f = 0;

    const hOnPage = heightEach.map(a => {
      f += a;
      return f;
    })

    setHeightOnPage(hOnPage)
    setHeightHalf(hOnPage[4] - (heightEach[4] / 2))
    
    return () => {
      window.removeEventListener("scroll", Hand, false);
    };
  }, [lastYPod])
  
  return (
    <>
      <NavContainer>
        <Logo content={'Bootstrap'} />
        <Toggle />
        <NavItens>
          <Item to={'navbar'} content={'Início'} />
          <Item to={'services'} content={'Serviços'} />
          <Item to={'partners'} content={'Parceiros'} />
          <Item to={'about'} content={'Sobre'} />
          <Item to={'contact'} content={'Contato'} />
        </NavItens>
      </NavContainer>
      <Carousel />
      <Services />
      <Partners />
      <About />
      <Contact heightHalf={heightHalf} heightOnPage={heightOnPage} />
    </>
  );
}

export default Home;
