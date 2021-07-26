const initialState = {
  isLoading: false,
  value: null,
  currency: null,
  error: null,
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TOKEN_VALUES_START":
      return { ...state, isLoading: true };
    case "GET_TOKEN_VALUE":
      return {
        ...state,
        value: action.payload.data.value,
        currency: action.payload.data.currency,
        isLoading: false,
      };
    case "GET_TOKEN_VALUE_ERR":
      return {
        ...state,
        error: action.payload.data,
      };
    default:
      return state;
  }
};

export default globalReducer;
