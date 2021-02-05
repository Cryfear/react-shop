import React, { useState } from "react";

import Pizza from "../../../../img/Goods/cheese.png";

interface GoodTypes {
  name: string;
  price: number;
  addPizzaAction: Function;
}

const Good = ({ name, price, addPizzaAction }: GoodTypes) => {
  const [dough, setDough]: [string, Function] = useState<string>("");
  const [length, setLength]: [number, Function] = useState<number>(0);
  const [counts, setCount]: [number, Function] = useState<number>(1);

  return (
    <div className="goods__item">
      <img src={Pizza} alt="" />
      <h4>{name}</h4>
      <div className="item__settings">
        <div className="item__type">
          <div onClick={() => setDough("thin")}>thin</div>
          <div onClick={() => setDough("traditional")}>traditional</div>
        </div>
        <div className="item__width">
          <div onClick={() => setLength(26)}>26 cm.</div>
          <div onClick={() => setLength(30)}>30 cm.</div>
          <div onClick={() => setLength(40)}>40 cm.</div>
        </div>
      </div>
      <div className="item__price-buy">
        <div className="item__price">from {price}</div>
        <button
          onClick={() => {
            setCount(counts + 1);
            return addPizzaAction({
              name,
              price,
              dough,
              length,
              counts,
            });
          }}
          className="item__buy"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default Good;
