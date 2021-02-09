import React from "react";

import "./HeaderBasket.scss";

type HeaderBasketTypes = {
  clearBasket: Function;
};

const HeaderBasket = ({ clearBasket }: HeaderBasketTypes) => {
  return (
    <div className="basket-page__main-header">
      <h2>The shopping cart</h2>
      <div onClick={() => clearBasket()} className="basket-page__main-header-clear">
        Clear
      </div>
    </div>
  );
};

export default HeaderBasket;
