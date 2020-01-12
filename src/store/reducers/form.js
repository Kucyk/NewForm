import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: null,
  loading: false,
  error: null,
  customers: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.FETCH_CUSTOMERS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.customers
      };
    case actionTypes.FETCH_CUSTOMERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case actionTypes.DELETE_CUSTOMER_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case actionTypes.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case actionTypes.DELETE_CUSTOMER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default reducer;
