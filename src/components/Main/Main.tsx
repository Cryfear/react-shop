import React from 'react';
import Goods from './Goods/Goods';
import Header from './Header/Header';
import Sort from './Sort/Sort';

import './Main.scss';

const Main = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Sort />
      <Goods />
    </div>
  )
}

export default Main;