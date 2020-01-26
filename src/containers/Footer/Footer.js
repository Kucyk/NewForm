import React from "react";
import { AppBar, Tabs, Tab } from "@material-ui/core/";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { connect } from "react-redux";

const Footer = ({ history, isAuthenticated }) => {
  let index = null;

  switch (history.location.pathname) {
    case "/form":
      index = 0;
      break;
    case "/list":
      index = 1;
      break;
    default:
      index = 0;
  }

  const navArray = [
    {
      name: "FORMULARZ",
      to: "/form"
    },
    {
      name: "LISTA UCZESTNIKÓW",
      to: "/list"
    }
  ];

  let content = null;

  content = isAuthenticated
    ? navArray.map(item => (
        <Tab
          component={Link}
          to={item.to}
          key={item.name}
          label={item.name}
          index={item.index}
        />
      ))
    : null;

  return (
    <AppBar position="static">
      <Tabs
        value={index}
        indicatorColor="secondary"
        textColor="secondary"
        centered
        scrollButtons="on"
      >
        {content}
      </Tabs>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token !== null
});

export default connect(mapStateToProps)(withRouter(Footer));
