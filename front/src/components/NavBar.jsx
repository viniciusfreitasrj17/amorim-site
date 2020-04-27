import React from 'react';
import { Link } from 'react-scroll';
import { hashHistory } from 'react-router';

import '../styles.css'

const NavContainer = ({ children }) => (
  <nav 
    className="navbar navbar-expand-lg navbar-dark navbar-styles" 
    id='navbar'
  >
    {children}
  </nav>
);

const Logo = ({ content }) => (
  <a 
    className="navbar-brand" 
    onClick={() => hashHistory.push('/')} 
    style={{cursor: 'pointer'}} 
  >
    {content}
  </a>
);

const Toggle = () => (
  <button
    className="navbar-toggler"
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
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
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

export { NavContainer, Logo, Toggle, NavItens, Item };
