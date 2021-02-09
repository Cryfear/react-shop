import { createStore, combineReducers, applyMiddleware } from "redux";
import ThunkMiddleware from "redux-thunk";
import BasketAction from "./basket-reducer";
import HomeAction from "./home-reducer";

const rootReducer = combineReducers({
  home: HomeAction,
  basket: BasketAction
});

const store: any = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

(window as any).store = store;

export default store;