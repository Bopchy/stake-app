const initialBoostOptionsState = {
  options: [],
  isLoading: false,
  error: null,
};

const boostOptionsReducer = (state = initialBoostOptionsState, action) => {
  switch (action.type) {
    case "GET_BOOST_OPTIONS_START":
      return { ...state, isLoading: true };
    case "GET_BOOST_OPTIONS":
      return {
        ...state,
        options: initialBoostOptionsState.options.concat(action.payload.data),
      };
    case "GET_BOOST_OPTIONS_ERR":
      return { ...state, error: action.payload.data };
    default:
      return state;
  }
};

export default boostOptionsReducer;
