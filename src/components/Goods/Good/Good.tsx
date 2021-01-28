import React from 'react';

const Good = () => {
  return (
    <div className="goods__item">
      <img src="" alt=""/>
      <h4>Чизбургер Пицца</h4>
      <div className="item__settings">
        <div className="item__type">
          <div>Тонкое</div>
          <div>Традиционное</div>
        </div>
        <div className="item__width">
          <div>26 см.</div>
          <div>30 см.</div>
          <div>40 см.</div>
        </div>
      </div>
      <div className="item__price-buy">
        <div className="item__price">от 360р</div>
        <button className="item__buy">Добавить</button>
      </div>
    </div>
  )
}

export default Good;