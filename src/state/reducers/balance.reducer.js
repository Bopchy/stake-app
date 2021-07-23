const initialState = {
  isLoading: false,
  balances: [],
  error: null,
};

const balanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_BALANCE_START": {
      return { ...state, isLoading: true };
    }
    case "GET_BALANCE": {
      return {
        ...state,
        balances: initialState.balances.concat(action.payload),
      };
    }
    default:
      return state;
  }
};

export default balanceReducer;
