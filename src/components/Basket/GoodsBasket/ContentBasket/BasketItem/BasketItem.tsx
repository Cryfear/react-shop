import React from 'react';

import pizza from '../../../../../img/Goods/asianish.png';
import './BasketItem.scss';

const BasketItem = () => {
  return (
    <div className="basket-page__item">
      <img src={pizza} alt="basket-item" width="100" height="100" />
      <div className="basket-page__item-wrapper">
        <div className="basket-page__item-title">
          <h4>Name</h4>
          <div>Settings</div>
        </div>
        <div className="basket-page__item-counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="basket-page__item-price">770</div>
        <div className="basket-page__item-deleter"></div>
      </div>
    </div>
  )
}

export default BasketItem;