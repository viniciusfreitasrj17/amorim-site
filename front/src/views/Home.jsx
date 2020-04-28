import React, { useEffect, useState } from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item, Ghost } from '../components/NavBar';
import Carousel from '../components/Home/Carousel';
import Services from '../components/Home/Services';
import Partners from '../components/Home/Partners';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const Home = () => {
  const [lastYPod, setLastYPos] = useState(0);
  const [heightOnPage, setHeightOnPage] = useState([]);

  const c = ['navbar', 'carousel', 'services', 'partners', 'about', 'contact'];

  // useEffect get height components
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

    return () => {
      window.removeEventListener("scroll", Hand, false);
    };
  }, [lastYPod])

  // useEffect NavBar
  useEffect(() => {
    const $nav = document.querySelector('nav')
    const $logo = document.querySelectorAll('.navbar-logo')[0]
    const $toggler = document.querySelectorAll('.navbar-toggler')[0]
    const $group = document.querySelectorAll('.navbar-group-itens')[0]

    
    window.addEventListener('scroll', toggleHeader, false)
    function toggleHeader() {
      if (window.pageYOffset > 98 && $nav.classList.contains('max-navbar')) {
        $nav.classList.remove('max-navbar')
        $nav.classList.add('min-navbar')
        // $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-2.png')
        $logo.classList.remove('max-navbar-logo')
        $logo.classList.add('min-navbar-logo')
        $toggler.classList.remove('max-navbar-toggler')
        $toggler.classList.add('min-navbar-toggler')
        $group.classList.remove('max-navbar-group-itens')
        $group.classList.add('min-navbar-group-itens')
      } else if (window.pageYOffset <= 98 && $nav.classList.contains('min-navbar')) {
        $nav.classList.add('max-navbar')
        $nav.classList.remove('min-navbar')
        // $logo.firstElementChild.setAttribute('src', 'imgs/omnitech-logo-1.png')
        $logo.classList.remove('min-navbar-logo')
        $logo.classList.add('max-navbar-logo')
        $toggler.classList.add('max-navbar-toggler')
        $toggler.classList.remove('min-navbar-toggler')
        $group.classList.add('max-navbar-group-itens')
        $group.classList.remove('min-navbar-group-itens')
      }
    }

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
      <Ghost />
      <Carousel />
      <Services />
      <Partners />
      <About />
      <Contact heightOnPage={heightOnPage} />
    </>
  );
}

export default Home;
