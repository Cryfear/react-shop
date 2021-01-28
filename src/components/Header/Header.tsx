import React from 'react';
import HeaderBasket from './HeaderBasket/HeaderBasket';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <header className="App-header">
      <HeaderLogo />
      <HeaderBasket />
    </header>
  )
}

export default Header;