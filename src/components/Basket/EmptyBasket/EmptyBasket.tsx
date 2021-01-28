import React from 'react';

const EmptyBasket = () => {
  return (
    <div className="basket__empty">
      <h2>Корзина пустая :( </h2>
      <p>Maybe, You didn't order any pizza</p>
      <p>to do it go to main page</p>
      <img src="" alt=""/>
      <button>Вернуться назад</button>
    </div>
  )
}

export default EmptyBasket;