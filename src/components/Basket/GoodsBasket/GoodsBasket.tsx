import React from "react";
import HeaderBasket from "./HeaderBasket/HeaderBasket";
import ContentBasket from "./ContentBasket/ContentBasket";
import PayBlockBasket from "./PayBlockBasket/PayBlockBasket";

import { PizzaTypes } from "../../../redux/basket-reducer";

interface GoodsBasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
  basketSwitcher: Function;
  clearBasket: Function;
  deletePizza: Function;
  goodsSum: number;
  orderedSum: number;
}

const GoodsBasket = ({
  orderedPizzaz,
  basketSwitcher,
  clearBasket,
  deletePizza,
  goodsSum,
  orderedSum,
}: GoodsBasketTypes) => {
  return (
    <div>
      <HeaderBasket clearBasket={clearBasket} />
      <ContentBasket deletePizza={deletePizza} orderedPizzaz={orderedPizzaz} />
      <PayBlockBasket orderedSum={orderedSum} goodsSum={goodsSum} basketSwitcher={basketSwitcher} />
    </div>
  );
};

export default GoodsBasket;
