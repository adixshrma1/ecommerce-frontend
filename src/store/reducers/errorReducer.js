const initialState = {
  isLoading: false,
  errorMessage: null,
  categoryLoader: false,
  categoryError: null,
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
    case "CATEGORY_LOADER":
      return {
        ...state,
        categoryLoader: true,
      };
    case "CATEGORY_SUCCESS":
      return {
        ...state,
        categoryLoader: false,
        categoryError: null,
      };
    default:
      return state;
  }
};
