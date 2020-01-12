import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "./store/actions/index";
import Layout from "./Layout/Layout";
import LoginInfo from "./components/Auth/LoginInfo/LoginInfo";
import { Switch, Route, Redirect } from "react-router-dom";

import CustomersTable from "./containers/CustomersTable/CustomersTable";
import CustomerForm from "./containers/CustomerForm/CustomerForm";

const App = ({ onTryAutoSignUp, isAuthenticated }) => {
  useEffect(() => {
    onTryAutoSignUp();
  }, [onTryAutoSignUp]);

  return (
    <Layout isAuthenticated={isAuthenticated}>
      {isAuthenticated ? (
        <Switch>
          <Route path="/form" component={CustomerForm} />
          <Route path="/list" component={CustomersTable} />
          <Redirect exact from="/" to="/form" />
        </Switch>
      ) : (
        <Switch>
          <Route path="/" component={LoginInfo} />
        </Switch>
      )}
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
