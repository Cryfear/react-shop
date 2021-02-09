import React from "react";
import BasketItem from "./BasketItem/BasketItem";

import "./ContentBasket.scss";

import { PizzaTypes } from "../../../../redux/basket-reducer";

// export type PizzaTypes = {
//   name: string;
//   dough: string;
//   length: number;
//   counts: number;
//   price: number;
// }

interface ContentBasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
}

const ContentBasket = ({ orderedPizzaz }: ContentBasketTypes) => {
  return (
    <div className="basket-page__list">
      {orderedPizzaz.map((item, index) => {
        return (
          <BasketItem
            name={item.name}
            dough={item.dough}
            length={item.length}
            counts={item.counts}
            price={item.price}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default ContentBasket;
