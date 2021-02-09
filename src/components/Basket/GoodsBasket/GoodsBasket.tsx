import React from "react";
import HeaderBasket from "./HeaderBasket/HeaderBasket";
import ContentBasket from "./ContentBasket/ContentBasket";
import PayBlockBasket from "./PayBlockBasket/PayBlockBasket";

import { PizzaTypes } from "../../../redux/basket-reducer";

interface GoodsBasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
  basketSwitcher: Function;
  clearBasket: Function;
}

const GoodsBasket = ({ orderedPizzaz, basketSwitcher, clearBasket }: GoodsBasketTypes) => {
  return (
    <div>
      <HeaderBasket clearBasket={clearBasket} />
      <ContentBasket orderedPizzaz={orderedPizzaz} />
      <PayBlockBasket basketSwitcher={basketSwitcher} />
    </div>
  );
};

export default GoodsBasket;
