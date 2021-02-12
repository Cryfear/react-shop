import React from "react";
import BasketItem from "./BasketItem/BasketItem";

import "./ContentBasket.scss";

import { PizzaTypes, editBasketAction } from "../../../../redux/basket-reducer";
import { connect } from "react-redux";

interface ContentBasketTypes {
  orderedPizzaz: Array<PizzaTypes>;
  deletePizza: Function;
  editBasketAction: Function;
}

const ContentBasket = ({ orderedPizzaz, deletePizza, editBasketAction }: ContentBasketTypes) => {
  return (
    <div className="basket-page__list">
      {orderedPizzaz.map((item, index) => {
        return (
          <BasketItem
            editBasketAction={editBasketAction}
            deletePizza={deletePizza}
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

const mapStateToProps = (state: Storage) => ({});

export default connect(mapStateToProps, { editBasketAction })(ContentBasket);
