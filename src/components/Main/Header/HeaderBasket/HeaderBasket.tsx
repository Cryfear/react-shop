import React from "react";
import { connect } from "react-redux";

interface HeaderBasketTypes {
  orderedSum: number;
  goodsSum: number;
}

const HeaderBasket = ({ orderedSum, goodsSum }: HeaderBasketTypes) => {
  return (
    <div className="basket">
      <div className="basket__price">{goodsSum}</div>
      <div className="basket__goods">{orderedSum}</div>
    </div>
  );
};

const mapStateToProps = (state: Storage) => ({
  orderedSum: state.basket.orderedSum,
  goodsSum: state.basket.goodsSum,
});

export default connect(mapStateToProps, {})(HeaderBasket);
