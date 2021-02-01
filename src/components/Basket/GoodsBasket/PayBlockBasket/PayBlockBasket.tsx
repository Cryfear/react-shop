import React from 'react';

import './PayBlockBasket.scss';

const PayBlockBasket = () => {
  return (
    <div className="basket__payBlock">
      <div className="payBlock__title">
        <span>Всего пицц: <span className="payBlock__all">3 шт.</span></span>
        <span>Сумма заказа: <span className="payBlock__price">1900</span></span>
      </div>
      <div className="payBlock__buttons">
        <button className="payBlock__back">Go back</button>
        <button className="payBlock__buy">Buy now</button>
      </div>
    </div>
  )
}

export default PayBlockBasket;