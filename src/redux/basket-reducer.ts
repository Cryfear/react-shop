import { Dispatch } from "react";

const ADD_PIZZA = "ADD_PIZZA";
const BASKET_SWITCHER = 'BASKET_SWITCHER';
const CLEAR_BASKET = "CLEAR_BASKET";
const DELETE_PIZZA = "DELETE_PIZZA";
const EDIT_BASKET = "EDIT_BASKET";
const EDIT_COUNT_PIZZA = "EDIT_COUNT_PIZZA";

export type PizzaTypes = {
  name: string;
  dough: string;
  length: number;
  counts: number;
  price: number;
  src: string;
}

interface BasketStateTypes {
  isOpenBasket: boolean;
  orderedSum: number;
  goodsSum: number;
  orderedPizzaz: Array<PizzaTypes>;
}

interface BasketActionTypes {
  type: string;
  pizza: PizzaTypes;
  name: string;
  price: number;
  plus: boolean;
  counts: number | boolean | any;
  secondary: boolean;
}

let initialState: BasketStateTypes = {
  isOpenBasket: false,
  orderedSum: 0, // количество товаров
  goodsSum: 0, // сумма денег за весь товар
  orderedPizzaz: []
};

const BasketAction = (state: BasketStateTypes = { ...initialState }, {
  type, // тип экшена
  price, // цена
  counts, // количество
  name, // имя
  pizza, // итем
  plus, // нужно ли плюсовать, булево значение, если false то минусует.
  secondary // вторичный вызов чтобы не было двойного прибавления товара
}: BasketActionTypes) => {
  switch (type) {
    case EDIT_BASKET: {
      if (counts !== false) {
        return {
          ...state,
          orderedPizzaz: [...state.orderedPizzaz],
          goodsSum: state.goodsSum + price,
          orderedSum: state.orderedSum + counts
        }
      }
      return {
        ...state
      }
    }
    case DELETE_PIZZA: {
      return {
        ...state,
        orderedSum: state.orderedSum - counts,
        goodsSum: state.goodsSum - (price * counts),
        orderedPizzaz: state.orderedPizzaz.filter(pizza => pizza.name !== name)
      };

    }
    case CLEAR_BASKET: {
      return {
        ...state,
        orderedPizzaz: [],
        goodsSum: 0,
        orderedSum: 0
      }
    }
    case BASKET_SWITCHER: {
      return {
        ...state,
        isOpenBasket: !state.isOpenBasket
      };
    }
    case ADD_PIZZA: {
      return {
        ...state,
        orderedSum: state.orderedSum + 1,
        orderedPizzaz: [...state.orderedPizzaz, pizza]
      };
    }
    case EDIT_COUNT_PIZZA: {
      console.log(plus, name);
      return {
        ...state,
        orderedSum: secondary ? state.orderedSum : state.orderedSum + 1,
        orderedPizzaz: state.orderedPizzaz.map(pizza => {
          if (pizza.name === name) plus ? pizza.counts += 1 : pizza.counts -= 1;

          return pizza;
        })
      };
    }
    default:
      return { ...state };
  }
};

export const editBasketAction = (counts: number, price: number, name?: string, plus?: boolean | any) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: EDIT_BASKET,
      counts,
      price
    });
    if (name) {
      dispatch(editCountPizzaAction(name, plus, true));
    }
  }
}

export const deletePizza = (name: string, price: number, counts: number) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: DELETE_PIZZA,
      name,
      price,
      counts
    })
  }
}

export const clearBasket = () => {
  return async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({ type: CLEAR_BASKET });
  }
}

export const basketSwitcher = () => {
  return async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({ type: BASKET_SWITCHER });
  }
}

export const addPizzaAction = (pizza: PizzaTypes) => {
  return async (dispatch: Dispatch<any>) => {
    if (pizza.counts > 1) {
      dispatch(editCountPizzaAction(pizza.name, true));
    }
    else {
      dispatch(addPizza(pizza));
    }
    dispatch(editBasketAction(0, pizza.price))
  };
};

export const editCountPizzaAction = (name: string, plus: boolean, secondary?: boolean) => ({
  type: EDIT_COUNT_PIZZA,
  name,
  plus,
  secondary
})

export const addPizza = (pizza: PizzaTypes) => ({
  type: ADD_PIZZA,
  pizza,
});

export default BasketAction;