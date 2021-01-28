import React from 'react';

const HeaderLogo = () => {
  return (
      <div className="logo__wrapper">
        <img src="../../../img/Header/logo.png" alt="logo"/>
        <div className="logo__description">
            <h1>React Pizza</h1>
            <p>самая вкусная пицца во вселенной</p>
        </div>
      </div>
  )
}

export default HeaderLogo;