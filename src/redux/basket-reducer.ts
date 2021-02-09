import { Dispatch } from "react";

const ADD_PIZZA = "ADD_PIZZA";
const ADD_COUNT_PIZZA = "ADD_COUNT_PIZZA";
const REFRESH_BASKET_SUM = "REFRESH_BASKET_SUM";
const BASKET_SWITCHER = 'BASKET_SWITCHER';
const CLEAR_BASKET = "CLEAR_BASKET";

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
  pizza?: PizzaTypes;
  name?: string;
  sum?: number | undefined;
}

let initialState: BasketStateTypes = {
  isOpenBasket: false,
  orderedSum: 0,
  goodsSum: 0,
  orderedPizzaz: []
};

const BasketAction = (state: BasketStateTypes = { ...initialState }, action: BasketActionTypes) => {
  switch (action.type) {
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
        orderedPizzaz: [...state.orderedPizzaz, action.pizza]
      };
    }
    case REFRESH_BASKET_SUM: {
      if (action.sum) {
        return {
          ...state,
          goodsSum: state.goodsSum + action.sum
        }
      }

      return { state };
    }
    case ADD_COUNT_PIZZA: {
      state.orderedPizzaz.forEach((pizza: PizzaTypes, index: number) => {
        if (pizza['name'] === action.name) {
          state.orderedPizzaz[index].counts += 1;
        }
      })
      return {
        ...state,
        orderedSum: state.orderedSum + 1,
      };
    }
    default:
      return {
        ...state
      };
  }
};

export const clearBasket = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: CLEAR_BASKET });
  }
}

export const basketSwitcher = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({ type: BASKET_SWITCHER });
  }
}

export const addPizzaAction = (pizzas: PizzaTypes) => {
  return async (dispatch: Dispatch<any>) => {
    if (pizzas.counts > 1) {
      dispatch(addCountPizzaAction(pizzas.name));
    }
    else {
      dispatch(addPizza(pizzas));
    }
    dispatch(refreshBasketSum(pizzas.price));
  };
};

export const refreshBasketSum = (sum: number) => ({
  type: REFRESH_BASKET_SUM,
  sum
})

export const addCountPizzaAction = (name: string) => {
  return async (dispatch: Dispatch<BasketActionTypes>) => {
    dispatch(addCountPizza(name));
  };
}

export const addCountPizza = (name: string) => ({
  type: ADD_COUNT_PIZZA,
  name
})

export const addPizza = (pizza: PizzaTypes) => ({
  type: ADD_PIZZA,
  pizza,
});

export default BasketAction;