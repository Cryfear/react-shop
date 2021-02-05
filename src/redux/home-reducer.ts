import chesse_burger from '../img/Goods/cheese-burger.png';
import asianish from '../img/Goods/asianish.png';
import chesse_chicken from '../img/Goods/cheese-chicken.png';
import chesse from '../img/Goods/cheese.png';

interface HomeStateTypes {
  isSortOpen: boolean;
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

let initialState: HomeStateTypes = {
  isSortOpen: false,
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

const HomeAction = (state = { ...initialState }, action: any) => {
  switch (action.type) {
    default:
      return {
        ...state
      };
  }
};

export default HomeAction;