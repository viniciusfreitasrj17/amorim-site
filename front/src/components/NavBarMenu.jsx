import React from 'react';
import { Link } from 'react-scroll';

import './styles.css'

const NavBarMenu = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-styles" id='navbarmenu'>
      <a className="navbar-brand" href="#">
        <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        Bootstrap
      </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto navbar-ul-liks">
      <li className="nav-item navbar-link-a active">
        <Link className="nav-link" to="navbarmenu" smooth={true} duration={1000} >Início<span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item navbar-link-a">
        <Link className="nav-link" to="services" smooth={true} duration={1000}>Serviços</Link>
      </li>
      <li className="nav-item navbar-link-a">
        <Link className="nav-link" to="partners" smooth={true} duration={1000}>Parceiros</Link>
      </li>
      <li className="nav-item navbar-link-a">
        <Link className="nav-link" to="about" smooth={true} duration={1000}>Sobre</Link>
      </li>
      <li className="nav-item navbar-link-a">
        <Link className="nav-link" to="contact" smooth={true} duration={1000} >Contato</Link>
      </li>
    </ul>
    </div>
    </nav>
  );
};

export default NavBarMenu;
