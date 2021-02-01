import React from 'react';
import Basket from './components/Basket/Basket';
import Main from './components/Main/Main';
import "./index.scss";

function App() {
  const basket = false;
  return (
    <div className="App">
      <div className="app__wrapper">
        {basket ? <Basket /> : <Main />}
      </div>
    </div>
  );
}

export default App;
