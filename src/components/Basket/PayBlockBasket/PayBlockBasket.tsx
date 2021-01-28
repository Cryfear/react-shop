import React from 'react';

const PayBlockBasket = () => {
  return (
    <div className="basket__payBlock">
      <div className="payBlock__title">
        <span>Всего пицц: 3 шт.</span>
        <span>Сумма заказа: 1900р</span>
      </div>
      <div className="payBlock__buttons">
        <button className="payBLock__back">Go back</button>
        <button className="payBlock__buy">Buy now</button>
      </div>
    </div>
  )
}

export default PayBlockBasket;