export const getTokenValuesStart = () => ({
  type: "GET_TOKEN_VALUES_START",
});

export const getTokenValues = (data) => ({
  type: "GET_TOKEN_VALUE",
  payload: data,
});

export const getTokenValuesErr = (data) => ({
  type: "GET_TOKEN_VALUE_ERR",
  payload: data,
});
