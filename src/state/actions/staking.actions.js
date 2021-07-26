export const getBoostOptionsStart = () => ({
  type: "GET_BOOST_OPTIONS_START",
});

export const getBoostOptions = (data) => ({
  type: "GET_BOOST_OPTIONS",
  payload: data,
});

export const getBoostOptionsErr = (data) => ({
  type: "GET_BOOST_OPTIONS_ERR",
  payload: data,
});
