import React from "react";

import pizza from "../../../../../img/Goods/asianish.png";
import "./BasketItem.scss";

interface BasketItemTypes {
  name: string;
  dough: string;
  length: number;
  counts: number;
  price: number;
}

const BasketItem = ({ name, dough, length, counts, price }: BasketItemTypes) => {
  return (
    <div className="basket-page__item">
      <img src={pizza} alt="basket-item" width="100" height="100" />
      <div className="basket-page__item-wrapper">
        <div className="basket-page__item-title">
          <h4>{name}</h4>
          <div>{dough + ", " + length}</div>
        </div>
        <div className="basket-page__item-counter">
          <button>-</button>
          <span>{counts}</span>
          <button>+</button>
        </div>
        <div className="basket-page__item-price">{price}</div>
        <div className="basket-page__item-deleter"></div>
      </div>
    </div>
  );
};

export default BasketItem;
