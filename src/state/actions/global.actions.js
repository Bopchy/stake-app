export const fetchTokenValuesStart = () => ({
  type: "GET_TOKEN_VALUES_START",
});

export const getTokenValue = (data) => ({
  type: "GET_TOKEN_VALUE",
  payload: data,
});

export const getTokenValueErr = (data) => ({
  type: "GET_TOKEN_VALUE_ERR",
  payload: data,
});
