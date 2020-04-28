import React from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../components/NavBar';
import Contact from '../components/Home/Contact';

const Page1 = () => {

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

      <section style={{height: '370px'}} >
        <h1>Intro</h1>
      </section>

      <section style={{height: '800px'}} >
        <h1>Content</h1>
      </section>

      <Contact />
    </>
  );
};

export default Page1;
