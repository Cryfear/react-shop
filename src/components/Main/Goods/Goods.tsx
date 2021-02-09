import React from "react";
import { connect } from "react-redux";
import Good from "./Good/Good";

import { addPizzaAction } from "../../../redux/basket-reducer";

import "./Goods.scss";

interface GoodsTypes {
  addPizzaAction: Function;
  sortedBy: string;
  pizzas: [
    {
      name: string;
      type: string;
      popularity: number;
      price: number;
      src: string;
    }
  ];
}

const Goods = ({ pizzas, addPizzaAction, sortedBy }: GoodsTypes) => {
  return (
    <section className="goods">
      <h3>All Pizzas</h3>
      <div className="goods__wrapper">
        {pizzas.map((item, index) => {
          if (sortedBy) {
            if (item.type === sortedBy) {
              return (
                <Good key={index} src={item.src} name={item.name} price={item.price} addPizzaAction={addPizzaAction} />
              );
            }
          } else {
            return (
              <Good src={item.src} key={index} name={item.name} price={item.price} addPizzaAction={addPizzaAction} />
            );
          }
          return false;
        })}
      </div>
    </section>
  );
};
const mapStateToProps = (state: Storage) => ({
  pizzas: state.home.pizzas,
  sortedBy: state.home.sortedBy,
});

export default connect(mapStateToProps, { addPizzaAction })(Goods);
