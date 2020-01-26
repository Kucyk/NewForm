import React, { Fragment, useState, useEffect } from "react";
import { Dialog, DialogTitle, Fab, Tabs, Tab } from "@material-ui/core";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";
import history from "../../history";
import CircularProgress from "@material-ui/core/CircularProgress";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AuthForm from "./AuthForm/AuthForm";

const Auth = ({ onAuth, onLogout, isAuthenticated, error, loading }) => {
  const [open, setOpen] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  let errorMessage = null;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || error) {
      setOpen(true);
    } else {
      setOpen(false);
      history.push("/form");
    }
  }, [isAuthenticated, error]);

  const switchModeHandler = () => {
    setIsSignIn(!isSignIn);
  };

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    history.push("/start");
    onLogout();
  };

  const handleSubmit = customData => (values, { setSubmitting, resetForm }) => {
    onAuth(values.email, values.password, customData);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  if (loading) {
    errorMessage = <CircularProgress />;
  }

  if (error) {
    switch (error.message) {
      case "EMAIL_NOT_FOUND":
        errorMessage = "NIEPRAWIDŁOWY EMAIL";
        break;
      case "EMAIL_EXISTS":
        errorMessage = "EMAIL ISTNIEJE";
        break;
      case "INVALID_PASSWORD":
        errorMessage = "NIEPRAWIDŁOWE HASŁO";
        break;
      case "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.":
        errorMessage = "ZBYT DUŻO PRÓB, SPRÓBUJ PÓŹNIEJ";
        break;
      default:
        errorMessage = "COŚ POSZŁO NIE TAK";
        break;
    }
  }

  let form = (
    <AuthForm
      handleSubmit={handleSubmit}
      handleToggle={handleToggle}
      isSignIn={isSignIn}
      switchModeHandler={switchModeHandler}
    />
  );

  return (
    <Fragment>
      {isAuthenticated ? (
        <Fab
          aria-label="add"
          size="small"
          color="secondary"
          onClick={handleLogout}
        >
          <ExitToAppIcon />
        </Fab>
      ) : (
        <Fab
          aria-label="add"
          size="small"
          color="secondary"
          onClick={handleToggle}
        >
          <VpnKeyRoundedIcon />
        </Fab>
      )}
      <Dialog
        fullWidth
        open={open}
        onClose={handleToggle}
        maxWidth="xs"
        style={{ textAlign: "center" }}
      >
        <Tabs
          value={isSignIn ? 0 : 1}
          onChange={switchModeHandler}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Zaloguj" />
          <Tab label="Zarejestruj" />
        </Tabs>
        <DialogTitle>{isSignIn ? "Logowanie" : "Rejestracja"}</DialogTitle>
        <div>{errorMessage}</div>
        {form}
      </Dialog>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  token: state.auth.token,
  userId: state.auth.userId,
  error: state.auth.error,
  loading: state.auth.loading,
  isAuthenticated: state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(actions.logout()),
  onAuth: (email, password, isSignIn) =>
    dispatch(actions.auth(email, password, isSignIn))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
