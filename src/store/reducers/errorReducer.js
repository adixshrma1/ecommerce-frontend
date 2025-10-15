const initialState = {
  isLoading: false,
  errorMessage: null,
};

export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS":
      return {
        ...state,
        isLoading: false,
      };
    case "ERROR":
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};
