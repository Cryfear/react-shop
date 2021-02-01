import React from 'react';
import logo from '../../../../img/Header/logo.png'

const HeaderLogo = () => {
  return (
    <div className="logo__wrapper">
      <img src={logo} alt="logo" />
      <div className="logo__description">
        <h1>React Pizza</h1>
        <p>самая вкусная пицца во вселенной</p>
      </div>
    </div>
  )
}

export default HeaderLogo;