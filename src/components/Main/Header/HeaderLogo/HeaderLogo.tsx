import React from 'react';
import logo from '../../../../img/Header/logo.png'

const HeaderLogo = () => {
  return (
    <div className="logo__wrapper">
      <img src={logo} alt="logo" />
      <div className="logo__description">
        <h1>React Pizza</h1>
        <p>The most delicious pizza in the world</p>
      </div>
    </div>
  )
}

export default HeaderLogo;