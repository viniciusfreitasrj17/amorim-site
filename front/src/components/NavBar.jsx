import React from 'react';
import { Link } from 'react-scroll';
import { hashHistory } from 'react-router';

import '../styles.css'

const NavContainer = ({ children }) => (
  <nav 
    className="navbar navbar-expand-lg navbar-dark navbar-styles max-navbar" 
  >
    {children}
  </nav>
);

const Logo = ({ content }) => (
  <a 
    className="navbar-brand max-navbar-logo navbar-logo" 
    onClick={() => hashHistory.push('/')} 
    style={{cursor: 'pointer'}} 
  >
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
    <ul className="navbar-nav mr-auto navbar-ul-liks">
      {children}
    </ul>
  </div>);

const Item = ({ to, content }) => {
  return (
    <li 
      className={`nav-item navbar-link-a ${to === 'navbar' ? 'active' : ''}`}
    >
      <Link className="nav-link" to={to} smooth={true} duration={1000} > 
        {content}
      </Link>
    </li>
  ) 
};

const Ghost = () => (
  <div id='navbar' className='navbar-ghost' />
) 

export { NavContainer, Logo, Toggle, NavItens, Item, Ghost };
