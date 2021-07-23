// GETBALANCESTART, GETBALANCE, GETBALANCEERR

export const getBalanceStart = () => ({
  type: "GET_BALANCE_START",
});

export const getBalance = (data) => ({
  type: "GET_BALANCE",
  payload: data,
});

export const getBalanceErr = (data) => ({
  type: "GET_BALANCE_ERR",
  payload: data,
});
