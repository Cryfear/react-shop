import React from "react";

import "./PayBlockBasket.scss";

interface PayBlockBasketTypes {
  basketSwitcher: Function;
  goodsSum: number;
  orderedSum: number;
}

const PayBlockBasket = ({ basketSwitcher, goodsSum, orderedSum }: PayBlockBasketTypes) => {
  return (
    <div className="basket__payBlock">
      <div className="payBlock__title">
        <span>
          Всего пицц: <span className="payBlock__all">{orderedSum}</span>
        </span>
        <span>
          Сумма заказа: <span className="payBlock__price">{goodsSum}</span>
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
