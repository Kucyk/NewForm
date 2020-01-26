import * as actionTypes from "./actionTypes";
import axios from "../../axios/axios-customers";

export const postData = personalData => dispatch => {
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

export const postStart = () => ({
  type: actionTypes.POST_DATA_START
});

export const postSuccess = () => ({
  type: actionTypes.POST_DATA_SUCCESS
});

export const postFail = error => ({
  type: actionTypes.POST_DATA_FAIL,
  error: error
});

export const fetchCustomers = token => dispatch => {
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

export const fetchCustomersStart = () => ({
  type: actionTypes.FETCH_CUSTOMERS_START
});

export const fetchCustomersSuccess = customers => ({
  type: actionTypes.FETCH_CUSTOMERS_SUCCESS,
  customers
});

export const fetchCustomersFail = error => ({
  type: actionTypes.FETCH_CUSTOMERS_FAIL,
  error: error
});

export const deleteCustomer = (id, token) => dispatch => {
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

export const deleteCustomerStart = () => ({
  type: actionTypes.FETCH_CUSTOMERS_START
});

export const deleteCustomerSuccess = () => ({
  type: actionTypes.FETCH_CUSTOMERS_SUCCESS
});

export const deleteCustomerFail = error => ({
  type: actionTypes.FETCH_CUSTOMERS_FAIL,
  error: error
});
