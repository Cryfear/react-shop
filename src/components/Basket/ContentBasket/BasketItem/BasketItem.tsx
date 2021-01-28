import React from 'react';

const BasketItem = () => {
  return (
    <div className="basket__item">
      <img src="" alt="basket-item"/>
      <div className="basket__item-wrapper">
        <div className="basket__item-title">
          <h4>Name</h4>
          <div>Settings</div>
        </div>
        <div className="basket__item-counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <div className="basket__item-price">770</div>
        <div className="basket__item-deleter">x</div>
      </div>
    </div>
  )
}

export default BasketItem;