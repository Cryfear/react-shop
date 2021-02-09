import React from "react";

import "./PayBlockBasket.scss";

interface PayBlockBasketTypes {
  basketSwitcher: Function;
}

const PayBlockBasket = ({ basketSwitcher }: PayBlockBasketTypes) => {
  return (
    <div className="basket__payBlock">
      <div className="payBlock__title">
        <span>
          Всего пицц: <span className="payBlock__all">3 шт.</span>
        </span>
        <span>
          Сумма заказа: <span className="payBlock__price">1900</span>
        </span>
      </div>
      <div className="payBlock__buttons">
        <button onClick={() => basketSwitcher()} className="payBlock__back">
          Go back
        </button>
        <button className="payBlock__buy">Buy now</button>
      </div>
    </div>
  );
};

export default PayBlockBasket;
