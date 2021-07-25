import axios from "axios";
import { all, put, takeLatest } from "redux-saga/effects";
import { getTokenValue, getTokenValueErr } from "../actions/global.actions";
import { getBalance, getBalanceErr } from "../actions/balance.actions";
import {
  getBoostOptions,
  getBoostOptionsErr,
} from "../actions/staking.actions";

function* fetchTokenValue() {
  try {
    const tokenValue = yield axios.get(
      "https://api.npoint.io/25aaf62216076cac55a6"
    );
    yield put(getTokenValue(tokenValue));
  } catch (error) {
    yield put(getTokenValueErr(error));
  }
}

function* fetchBalance() {
  try {
    const balance = yield axios.get(
      "https://api.npoint.io/aa3f0746618465c4f5e4"
    );
    yield put(getBalance(balance));
  } catch (error) {
    yield put(getBalanceErr(error));
  }
}

function* fetchBoostOptions() {
  try {
    const options = yield axios.get(
      "https://api.npoint.io/acaac311a90496acf77b"
    );
    yield put(getBoostOptions(options));
  } catch (error) {
    yield put(getBoostOptionsErr(error));
  }
}

function* watchFetchTokenValue() {
  yield takeLatest("GET_TOKEN_VALUES_START", fetchTokenValue);
}
function* watchFetchBalance() {
  yield takeLatest("GET_BALANCE_START", fetchBalance);
}
function* watchFetchBoostOptions() {
  yield takeLatest("GET_BOOST_OPTIONS_START", fetchBoostOptions);
}

export default function* rootSaga() {
  yield all([
    watchFetchTokenValue(),
    watchFetchBalance(),
    watchFetchBoostOptions(),
  ]);
}
