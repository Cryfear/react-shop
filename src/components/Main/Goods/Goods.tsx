import React from "react";
import { connect } from "react-redux";
import Good from "./Good/Good";

import { addPizzaAction } from "../../../redux/basket-reducer";

import "./Goods.scss";

interface GoodsTypes {
  addPizzaAction: Function;
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

const Goods = ({ pizzas, addPizzaAction }: GoodsTypes) => {
  return (
    <section className="goods">
      <h3>All Pizzas</h3>
      <div className="goods__wrapper">
        {pizzas.map((item, index) => (
          <Good key={index} name={item.name} price={item.price} addPizzaAction={addPizzaAction} />
        ))}
      </div>
    </section>
  );
};
const mapStateToProps = (state: Storage) => ({
  pizzas: state.home.pizzas,
});

export default connect(mapStateToProps, { addPizzaAction })(Goods);
