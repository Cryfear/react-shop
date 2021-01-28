import React from 'react';
import HeaderBasket from '../Header/HeaderBasket/HeaderBasket';
import ContentBasket from './ContentBasket/ContentBasket';
import PayBlockBasket from './PayBlockBasket/PayBlockBasket';

const Basket = () => {
  return (
    <section className="basket">
      <HeaderBasket />
      <ContentBasket />
      <PayBlockBasket />
    </section>
  )
}

export default Basket;