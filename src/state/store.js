import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
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

const composedEnhancers = compose(
  applyMiddleware(sagaMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const initialState = {};

const store = createStore(allReducers, initialState, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
