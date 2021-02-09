import React from "react";
import { connect } from "react-redux";

import { basketSwitcher } from "../../../../redux/basket-reducer";

interface HeaderBasketTypes {
  orderedSum: number;
  goodsSum: number;
  basketSwitcher: Function;
}

const HeaderBasket = ({ orderedSum, goodsSum, basketSwitcher }: HeaderBasketTypes) => {
  return (
    <div onClick={() => basketSwitcher()} className="basket">
      <div className="basket__price">{goodsSum}</div>
      <div className="basket__goods">{orderedSum}</div>
    </div>
  );
};

const mapStateToProps = (state: Storage) => ({
  orderedSum: state.basket.orderedSum,
  goodsSum: state.basket.goodsSum,
});

export default connect(mapStateToProps, { basketSwitcher })(HeaderBasket);
