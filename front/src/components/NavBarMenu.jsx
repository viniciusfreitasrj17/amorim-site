import React from 'react';

import './styles.css'

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-styles">
      <a class="navbar-brand" href="#">
        <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        Bootstrap
      </a>

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Início<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Serviços</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Parceiros</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Sobre</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contato</a>
      </li>
    </ul>
    </div>
    </nav>
  );
};

export default NavBar;
