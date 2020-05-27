import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { hashHistory } from 'react-router';

import '../styles.css'

const NavContainer = ({ children }) => (
  <nav 
    className="navbar navbar-expand-lg navbar-dark navbar-styles max-navbar"
    id='navbar' 
  >
    {children}
  </nav>
);

const Logo = ({ content, img }) => (
  <a 
    className="navbar-brand max-navbar-logo navbar-logo" 
    onClick={() => hashHistory.push('/')} 
    style={{cursor: 'pointer'}} 
  >
    {img && <img src={img} className='max-navbar-imglogo navbar-imglogo' />}
    {content}
  </a>
);

const Toggle = () => (
  <button
    className="navbar-toggler max-navbar-toggler navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
);

const NavItens = ({ children }) => (
  <div 
    className="collapse navbar-collapse max-navbar-group-itens navbar-group-itens" 
    id="navbarSupportedContent"
  >
    <ul className="navbar-nav ml-auto navbar-ul-liks">
      {children}
    </ul>
  </div>);

const Item = ({ to, content, active }) => {
  const [activeArea, setActiveArea] = useState('');

  useEffect(() => {
    setActiveArea(active === to && 'active')
  }, [window.scrollY])
  
  return (
    <li 
      className={`nav-item navbar-link-a ${activeArea}`}
    >
      <Link 
        className="nav-link" 
        data-toggle="collapse" 
        data-target=".navbar-collapse.show" 
        to={to} 
        smooth={true} 
        duration={1000} 
      > 
        {content}
      </Link>
    </li>
  ) 
};

const Ghost = () => (
  <div className='navbar-ghost' />
) 

export { NavContainer, Logo, Toggle, NavItens, Item, Ghost };
