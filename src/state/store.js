import { combineReducers, createStore } from "redux";
import balanceReducer from "./reducers/balance.reducer";
import globalReducer from "./reducers/global.reducer";
import stakingReducer from "./reducers/staking.reducer";

const allReducers = () =>
  combineReducers({
    balance: balanceReducer,
    tokenValues: globalReducer,
    boostOptions: stakingReducer.boostOptionsReducer,
  });

const initialState = {
  balance: [],
  tokenValues: {},
  staked: {},
  boostOptions: [],
};

const store = () => {
  return createStore(allReducers, initialState);
};

export default store;
