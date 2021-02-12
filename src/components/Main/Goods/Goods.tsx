import React from "react";
import { connect } from "react-redux";
import Good from "./Good/Good";

import { addPizzaAction } from "../../../redux/basket-reducer";

import "./Goods.scss";

type pizzaItemType = {
  name: string;
  type: string;
  popularity: number;
  price: number;
  src: string;
};

interface GoodsTypes {
  addPizzaAction: Function;
  sortedBy: string;
  sortedByOther: string;
  pizzas: Array<pizzaItemType>;
  isReverse: boolean;
}

const Goods = ({ pizzas, addPizzaAction, sortedBy, sortedByOther, isReverse }: GoodsTypes) => {
  const result = [...pizzas]
    .sort((a, b) => {
      if (sortedByOther === "popularity") {
        return b.popularity - a.popularity;
      } else if (sortedByOther === "price") {
        return b.price - a.price;
      } else if (sortedByOther === "name") {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      }
      return 0;
    })
    .map((item, index) => {
      if (sortedBy) {
        if (item.type === sortedBy) {
          return (
            <Good
              key={index}
              src={item.src}
              name={item.name}
              price={item.price}
              addPizzaAction={addPizzaAction}
            />
          );
        }
      } else {
        return (
          <Good
            src={item.src}
            key={index}
            name={item.name}
            price={item.price}
            addPizzaAction={addPizzaAction}
          />
        );
      }
      return false;
    });
  return (
    <section className="goods">
      <h3>All Pizzas</h3>
      <div className="goods__wrapper">{isReverse ? result.reverse() : result}</div>
    </section>
  );
};

const mapStateToProps = (state: Storage) => ({
  pizzas: state.home.pizzas,
  sortedBy: state.home.sortedBy,
  sortedByOther: state.home.sortedByOther,
  isReverse: state.home.isReverse,
});

export default connect(mapStateToProps, { addPizzaAction })(Goods);
