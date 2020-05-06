import React, { useState, useEffect } from 'react';

import { NavContainer, Logo, Toggle, NavItens, Item } from '../components/NavBar';
import Intro from '../components/Pages/Intro';
import Content from '../components/Pages/Content';
import Contact from '../components/Home/Contact';

const Page4 = () => {
  const [lastYPod, setLastYPos] = useState(0);
  const [heightOnPage, setHeightOnPage] = useState([]);
  const [active, setActive] = useState('');

  const c = ['carousel', 'content', 'contact'];

  // To top
  useEffect(() => {
    return window.scrollTo(0, 0)
  }, [])

  // Get height components
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

  // NavBar
  useEffect(() => {

    // Effect Size
    const $nav = document.querySelector('nav')
    const $logo = document.querySelectorAll('.navbar-logo')[0]
    const $toggler = document.querySelectorAll('.navbar-toggler')[0]
    const $group = document.querySelectorAll('.navbar-group-itens')[0]
    window.addEventListener('scroll', toggleNav, false)
    function toggleNav() {
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

    // Effect Link Active
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
          <Item to={'content'} content={'Galeria'} active={active} />
          <Item to={'contact'} content={'Contato'} active={active} />
        </NavItens>
      </NavContainer>

      <Intro />

      <Content />

      <Contact heightOnPage={heightOnPage[1] - 300} />
    </>
  );
};

export default Page4;
