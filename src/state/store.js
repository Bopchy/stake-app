import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import balanceReducer from "./reducers/balance.reducer";
import globalReducer from "./reducers/global.reducer";
import boostOptionsReducer from "./reducers/staking.reducer";
import rootSaga from "./sagas";

const allReducers = combineReducers({
  balance: balanceReducer,
  tokenValues: globalReducer,
  boostOptions: boostOptionsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const store = createStore(
  allReducers,
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
