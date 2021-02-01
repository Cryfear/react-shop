import React from 'react';

import './EmptyBasket.scss';
import emptyBasket from '../../../img/Basket/bought-result.png';
import smile from '../../../img/Basket/smile.png';

const EmptyBasket = () => {
  return (
    <div className="basket-page__empty">
      <h2>The shopping cart is empty <img src={smile} alt="" width="30px" height="30px" /> </h2>
      <p>Maybe, You didn't order any pizza</p>
      <p>to do it go to main page</p>
      <div className="basket-page__empty-img"><img src={emptyBasket} alt="" /></div>
      <button>Go back</button>
    </div>
  )
}

export default EmptyBasket;