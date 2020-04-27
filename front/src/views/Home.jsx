import React from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../components/NavBar';
import Carousel from '../components/Home/Carousel';
import Services from '../components/Home/Services';
import Partners from '../components/Home/Partners';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const Home = () => {

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
      <Contact />
    </>
  );
}

export default Home;
