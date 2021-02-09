import React from "react";
import { connect } from "react-redux";
import Basket from "./components/Basket/Basket";
import Main from "./components/Main/Main";

import "./index.scss";

function App({ isOpenBasket }: { isOpenBasket: boolean }) {
  return (
    <div className="App">
      <div className="app__wrapper">{isOpenBasket ? <Basket /> : <Main />}</div>
    </div>
  );
}

const mapStateToProps = (state: Storage) => ({
  isOpenBasket: state.basket.isOpenBasket,
});

export default connect(mapStateToProps, {})(App);
