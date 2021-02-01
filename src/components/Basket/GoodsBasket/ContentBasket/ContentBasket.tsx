import React from 'react';
import BasketItem from './BasketItem/BasketItem';

import './ContentBasket.scss';

const ContentBasket = () => {
  return (
    <div className="basket-page__list">
      <BasketItem />
    </div>
  )
}

export default ContentBasket;