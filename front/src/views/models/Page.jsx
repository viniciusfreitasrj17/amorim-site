import React, { useState, useEffect } from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../../components/NavBar';
import Intro from '../../components/Pages/Intro';
import Content from '../../components/Pages/Content';
import Footer from '../../components/Pages/Footer';

import LogoImg from '../../images/g12.png';


import { toTop, onScroll, getHeightComponent, navbarEffectSize } from '../../util/funcs';

const Page = () => {
  const [lastYPod, setLastYPos] = useState(0);
  const [heightOnPage, setHeightOnPage] = useState([]);
  const [active, setActive] = useState('');

  const c = ['carousel', 'content', 'footer'];

  // To top
  useEffect(() => toTop(),[])

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
        if (window.scrollY > (e-400)) {
          setActive(c[i + 1])
        }
      })
    }

    activeNav()
  }, [lastYPod])

  return (
    <>
      <NavContainer>
        <Logo content={'Amorim'} img={LogoImg} />
        <Toggle />
        <NavItens>
          <Item to={'carousel'} content={'Início'} active={active} />
          <Item to={'content'} content={'Galeria'} active={active} />
          <Item to={'footer'} content={'Contato'} active={active} />
        </NavItens>
      </NavContainer>

      <Intro />

      <Content heightOnPage={heightOnPage[0] - 300} />

      <Footer heightOnPage={heightOnPage[1] - 500} />
    </>
  );
};

export default Page;
