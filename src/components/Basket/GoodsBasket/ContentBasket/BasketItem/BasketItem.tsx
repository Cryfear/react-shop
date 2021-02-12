import React from "react";

import pizza from "../../../../../img/Goods/asianish.png";
import "./BasketItem.scss";

interface BasketItemTypes {
  name: string;
  dough: string;
  length: number;
  counts: number;
  price: number;
  deletePizza: Function;
  editBasketAction: Function;
}

const BasketItem = ({
  name,
  dough,
  length,
  counts,
  price,
  deletePizza,
  editBasketAction,
}: BasketItemTypes) => {
  return (
    <div className="basket-page__item">
      <img src={pizza} alt="basket-item" width="100" height="100" />
      <div className="basket-page__item-wrapper">
        <div className="basket-page__item-title">
          <h4>{name}</h4>
          <div>{dough + ", " + length}</div>
        </div>
        <div className="basket-page__item-counter">
          <button
            onClick={() => {
              return counts > 1
                ? editBasketAction(-1, -price, name, false)
                : deletePizza(name, price, counts);
            }}
          >
            -
          </button>
          <span>{counts}</span>
          <button onClick={() => editBasketAction(1, price, name, true)}>+</button>
        </div>
        <div className="basket-page__item-price">{price}</div>
        <div onClick={() => deletePizza(name, price, counts)} className="basket-page__item-deleter"></div>
      </div>
    </div>
  );
};

export default BasketItem;
