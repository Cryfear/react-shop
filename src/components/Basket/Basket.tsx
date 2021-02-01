import React from 'react';
import Header from './Header/Header';

import './Basket.scss';
import EmptyBasket from './EmptyBasket/EmptyBasket';
import GoodsBasket from './GoodsBasket/GoodsBasket';

const Basket = () => {
  const empty = false;
  return (
    <section className="basket-page">
      <Header />
      {empty ? <EmptyBasket /> : <GoodsBasket />}
    </section>
  )
}

export default Basket;