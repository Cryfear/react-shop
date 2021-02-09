import chesse_burger from '../img/Goods/cheese-burger.png';
import asianish from '../img/Goods/asianish.png';
import chesse_chicken from '../img/Goods/cheese-chicken.png';
import chesse from '../img/Goods/cheese.png';
import { Dispatch } from 'react';

const SORT_ACTION = "SORT_ACTION";

interface HomeStateTypes {
  isSortOpen: boolean;
  sortedBy: string;
  pizzas: Array<
    {
      name: string;
      type: string;
      popularity: number;
      price: number;
      src: string;
    }
  >;
}

interface HomeActionTypes {
  type: string;
  sortedBy?: string;
}

let initialState: HomeStateTypes = {
  isSortOpen: false,
  sortedBy: '',
  pizzas: [
    {
      name: 'Cheese Burger-Pizza',
      type: 'meat',
      popularity: 3.4,
      price: 1000,
      src: chesse_burger
    },
    {
      name: "Cheese",
      type: 'vegan',
      popularity: 4,
      price: 1432,
      src: asianish
    }
    , {
      name: 'Asianis prawns',
      type: 'grill',
      popularity: 3,
      price: 505,
      src: chesse_chicken
    }
    , {
      name: 'Hot Momento',
      type: 'spicy',
      popularity: 4.5,
      price: 902,
      src: chesse
    },
    {
      name: 'Closed? What?',
      type: 'closed',
      popularity: 1,
      price: 2540,
      src: asianish
    }
  ]
};

const HomeAction = (state: HomeStateTypes = { ...initialState }, action: HomeActionTypes) => {
  switch (action.type) {
    case SORT_ACTION: {
      return { ...state, sortedBy: action.sortedBy }
    }
    default:
      return {
        ...state
      };
  }
};

export const sortAction = (sortedBy: string) => {
  return async (dispatch: Dispatch<any>) => {
    dispatch({
      type: SORT_ACTION,
      sortedBy: sortedBy
    });
  };
}

export default HomeAction;