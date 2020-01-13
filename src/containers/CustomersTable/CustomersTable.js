import React, { Fragment, useEffect } from "react";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

import withHandleError from "../../hoc/withHandleError/withHandleError";
import withHandleLoading from "../../hoc/withHandleLoading/withHandleLoading";
import CustomersList from "../../components/CustomerList/CustomersList";

const createRows = (
  firstName,
  lastName,
  email,
  city,
  occupation,
  number,
  key
) => {
  return [firstName, lastName, email, city, occupation, number, key];
};

const CustomersListWithHandleErrorAndLoading = withHandleLoading(
  withHandleError(CustomersList)
);

const CustomersTable = ({
  onFetchCustomers,
  token,
  onDeleteCustomer,
  customers,
  error,
  loading
}) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    onFetchCustomers(token);
  }, [onFetchCustomers, token]);

  let rows = [];

  if (customers) {
    rows = [];

    Object.keys(customers).map((key, index) =>
      rows.push(
        createRows(
          customers[key].firstName,
          customers[key].lastName,
          customers[key].email,
          customers[key].city,
          customers[key].occupation,
          customers[key].number,
          key
        )
      )
    );
  }

  const handleDelete = ids => {
    for (let id of ids) {
      onDeleteCustomer(id, token);
    }
  };

  return (
    <Fragment>
      <CustomersListWithHandleErrorAndLoading
        handleDelete={handleDelete}
        rows={rows}
        error={error}
        loading={loading}
      />
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    token: state.auth.token,
    customers: state.form.customers,
    loading: state.form.loading,
    error: state.form.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchCustomers: token => dispatch(actions.fetchCustomers(token)),
    onDeleteCustomer: (id, token) => dispatch(actions.deleteCustomer(id, token))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomersTable);
