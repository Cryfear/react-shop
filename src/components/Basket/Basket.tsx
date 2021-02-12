import React from "react";
import Header from "./Header/Header";

import "./Basket.scss";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import GoodsBasket from "./GoodsBasket/GoodsBasket";
import { connect } from "react-redux";

import { PizzaTypes } from "../../redux/basket-reducer";
import { basketSwitcher, clearBasket, deletePizza } from "../../redux/basket-reducer";

interface BasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
  isOpenBasket: boolean;
  basketSwitcher: Function;
  clearBasket: Function;
  deletePizza: Function;
  goodsSum: number;
  orderedSum: number;
}

const Basket = ({
  orderedPizzaz,
  isOpenBasket,
  basketSwitcher,
  clearBasket,
  deletePizza,
  goodsSum,
  orderedSum,
}: BasketTypes) => {
  return (
    <section className="basket-page">
      <Header />
      {isOpenBasket && orderedPizzaz.length > 0 ? (
        <GoodsBasket
          orderedSum={orderedSum}
          basketSwitcher={basketSwitcher}
          orderedPizzaz={orderedPizzaz}
          clearBasket={clearBasket}
          deletePizza={deletePizza}
          goodsSum={goodsSum}
        />
      ) : (
        <EmptyBasket basketSwitcher={basketSwitcher} />
      )}
    </section>
  );
};

const mapStateToProps = (state: Storage) => ({
  orderedPizzaz: state.basket.orderedPizzaz,
  isOpenBasket: state.basket.isOpenBasket,
  goodsSum: state.basket.goodsSum,
  orderedSum: state.basket.orderedSum,
});

export default connect(mapStateToProps, { basketSwitcher, clearBasket, deletePizza })(Basket);
