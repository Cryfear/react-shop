import chesse_burger from '../img/Goods/cheese-burger.png';
import asianish from '../img/Goods/asianish.png';
import chesse_chicken from '../img/Goods/cheese-chicken.png';
import chesse from '../img/Goods/cheese.png';
import { Dispatch } from 'react';

const SORT_ACTION = "SORT_ACTION";
const SORTED_BY_OTHER = "SORTED_BY_OTHER";
const IS_SORT_OPEN = "IS_SORT_OPEN";
const REVERSE_ACTION = "REVERSE_ACTION";

interface HomeStateTypes {
  isReverse: boolean;
  isSortOpen: boolean;
  sortedBy: string;
  sortedByOther: string;
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
  sortedBy: string;
  sortedByOther: string;
}

let initialState: HomeStateTypes = {
  isReverse: false,
  isSortOpen: false,
  sortedBy: '',
  sortedByOther: 'popularity',
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



const HomeAction = (state: HomeStateTypes = { ...initialState }, {
  type, sortedBy, sortedByOther
}: HomeActionTypes) => {
  switch (type) {
    case REVERSE_ACTION: {
      return {
        ...state,
        isReverse: !state.isReverse
      }
    }
    case IS_SORT_OPEN: {
      return {
        ...state,
        isSortOpen: !state.isSortOpen
      }
    }
    case SORTED_BY_OTHER: {
      return {
        ...state,
        sortedByOther: sortedByOther
      }
    }
    case SORT_ACTION: {
      return { ...state, sortedBy: sortedBy }
    }
    default:
      return {
        ...state
      };
  }
};

export const reverseSortAction = () => {
  return async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({
      type: REVERSE_ACTION,
    });
  };
}

export const sortOpenAction = () => {
  return async (dispatch: Dispatch<{ type: string }>) => {
    dispatch({
      type: IS_SORT_OPEN,
    });
  };
}

export const sortedByOtherAction = (sortedByOther: string) => {
  return async (dispatch: Dispatch<{ type: string, sortedByOther: string }>) => {
    dispatch({
      type: SORTED_BY_OTHER,
      sortedByOther
    });
  };
}

export const sortAction = (sortedBy: string) => {
  return async (dispatch: Dispatch<{ type: string, sortedBy: string }>) => {
    dispatch({
      type: SORT_ACTION,
      sortedBy: sortedBy
    });
  };
}

export default HomeAction;