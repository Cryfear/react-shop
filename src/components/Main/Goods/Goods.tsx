import React from 'react';
import Good from './Good/Good';

import './Goods.scss';

const Goods = () => {
  return (
    <section className="goods">
      <h3>All Pizzas</h3>
      <div className="goods__wrapper">
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
        <Good />
      </div>
    </section>
  )
}

export default Goods;