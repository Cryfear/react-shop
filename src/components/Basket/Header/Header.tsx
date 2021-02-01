import React from 'react';
import logo from '../../../img/Header/logo.png';

import "./Header.scss";

const Header = () => {
  return (
    <div className="basket-page__header">
      <img src={logo} alt="logo" />
      <div className="basket-page__header-descr">
        <h1>React Pizza</h1>
        <p>the most reactive pizza</p>
      </div>
    </div>
  )
}

export default Header;