import React from "react";
import Header from "./Header/Header";

import "./Basket.scss";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import GoodsBasket from "./GoodsBasket/GoodsBasket";
import { connect } from "react-redux";

import { PizzaTypes } from "../../redux/basket-reducer";
import { basketSwitcher, clearBasket } from "../../redux/basket-reducer";

interface BasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
  isOpenBasket: boolean;
  basketSwitcher: Function;
  clearBasket: Function;
}

const Basket = ({ orderedPizzaz, isOpenBasket, basketSwitcher, clearBasket }: BasketTypes) => {
  return (
    <section className="basket-page">
      <Header />
      {isOpenBasket && orderedPizzaz.length > 0 ? (
        <GoodsBasket basketSwitcher={basketSwitcher} orderedPizzaz={orderedPizzaz} clearBasket={clearBasket} />
      ) : (
        <EmptyBasket basketSwitcher={basketSwitcher} />
      )}
    </section>
  );
};

const mapStateToProps = (state: Storage) => ({
  orderedPizzaz: state.basket.orderedPizzaz,
  isOpenBasket: state.basket.isOpenBasket,
});

export default connect(mapStateToProps, { basketSwitcher, clearBasket })(Basket);
