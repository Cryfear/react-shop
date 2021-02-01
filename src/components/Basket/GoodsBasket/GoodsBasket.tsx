import React from 'react';
import HeaderBasket from './HeaderBasket/HeaderBasket';
import ContentBasket from './ContentBasket/ContentBasket';
import PayBlockBasket from './PayBlockBasket/PayBlockBasket';

const GoodsBasket = () => {
  return (
    <div>
      <HeaderBasket />
      <ContentBasket />
      <PayBlockBasket />
    </div>
  )
}

export default GoodsBasket;