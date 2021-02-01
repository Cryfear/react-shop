import React from 'react';

import Pizza from '../../../../img/Goods/cheese.png'

const Good = () => {
  return (
    <div className="goods__item">
      <img src={Pizza} alt="" />
      <h4>Чизбургер Пицца</h4>
      <div className="item__settings">
        <div className="item__type">
          <div>тонкое</div>
          <div>традиционное</div>
        </div>
        <div className="item__width">
          <div>26 см.</div>
          <div>30 см.</div>
          <div>40 см.</div>
        </div>
      </div>
      <div className="item__price-buy">
        <div className="item__price">от 360</div>
        <button className="item__buy">Добавить</button>
      </div>
    </div>
  )
}

export default Good;