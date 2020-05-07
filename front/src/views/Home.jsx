import React, { useEffect, useState } from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../components/NavBar';
import Carousel from '../components/Home/Carousel';
import Services from '../components/Home/Services';
import Partners from '../components/Home/Partners';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

import { onScroll, getHeightComponent, navbarEffectSize } from '../util/funcs';

const Home = () => {
  const [lastYPod, setLastYPos] = useState(0);
  const [heightOnPage, setHeightOnPage] = useState([]);
  const [active, setActive] = useState('');

  const c = ['carousel', 'services', 'partners', 'about', 'contact'];

  // Get Scroll Y
  useEffect(() => 
    onScroll(lastYPod, setLastYPos)
  ,[lastYPod])
  
  // Get height components
  useEffect(() => 
    getHeightComponent(c, heightOnPage, setHeightOnPage)
  ,[lastYPod])

  // NavBar Effect Size
  useEffect(() => 
    navbarEffectSize()
  ,[lastYPod])

  // NavBar Effect Link Active
  useEffect(() => {
    setActive(c[0])

    function activeNav() {
      heightOnPage.forEach((e, i) => {
        if (window.scrollY > (e-300)) {
          setActive(c[i + 1])
        }
      })
    }

    activeNav()
  }, [lastYPod])

  return (
    <>
      <NavContainer>
        <Logo content={'Amorim'} />
        <Toggle />
        <NavItens>
          <Item to={'carousel'} content={'Início'} active={active} />
          <Item to={'services'} content={'Serviços'} active={active} />
          <Item to={'partners'} content={'Parceiros'} active={active} />
          <Item to={'about'} content={'Sobre'} active={active} />
          <Item to={'contact'} content={'Contato'} active={active} />
        </NavItens>
      </NavContainer>
      <Carousel />
      <Services />
      <Partners heightOnPage={heightOnPage[1] - 300} />
      <About heightOnPage={heightOnPage[2] - 300} />
      <Contact heightOnPage={heightOnPage[3] - 300} />
    </>
  );
}

export default Home;
