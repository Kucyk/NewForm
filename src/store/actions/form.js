import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-customers";

//////////////////////////////////////////
////////////////////////////POST CHARACTER
//////////////////////////////////////////

export const postData = personalData => {
  return dispatch => {
    dispatch(postStart());
    axios
      .post("/people.json", personalData)
      .then(response => {
        dispatch(postSuccess());
      })
      .catch(err => {
        dispatch(postFail(err));
      });
  };
};

export const postStart = () => {
  return {
    type: actionTypes.POST_DATA_START
  };
};

export const postSuccess = () => {
  return {
    type: actionTypes.POST_DATA_SUCCESS
  };
};

export const postFail = error => {
  return {
    type: actionTypes.POST_DATA_FAIL,
    error: error
  };
};

//////////////////////////////////////////
//////////////////////////FETCH CHARACTERS
//////////////////////////////////////////

export const fetchCustomers = token => {
  return dispatch => {
    dispatch(fetchCustomersStart());
    axios
      .get("/people.json?auth=" + token)
      .then(response => {
        dispatch(fetchCustomersSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchCustomersFail(error));
      });
  };
};

export const fetchCustomersStart = () => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_START
  };
};

export const fetchCustomersSuccess = customers => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_SUCCESS,
    customers
  };
};

export const fetchCustomersFail = error => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_FAIL,
    error: error
  };
};

//////////////////////////////////////////
//////////////////////////DELETE CUSTOMER
//////////////////////////////////////////

export const deleteCustomer = (id, token) => {
  return dispatch => {
    dispatch(deleteCustomerStart());
    axios
      .delete(`/people/${id}.json`)
      .then(response => {
        dispatch(deleteCustomerSuccess());
        dispatch(fetchCustomers(token));
      })
      .catch(err => {
        dispatch(deleteCustomerFail(err));
      });
  };
};

export const deleteCustomerStart = () => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_START
  };
};

export const deleteCustomerSuccess = () => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_SUCCESS
  };
};

export const deleteCustomerFail = error => {
  return {
    type: actionTypes.FETCH_CUSTOMERS_FAIL,
    error: error
  };
};
