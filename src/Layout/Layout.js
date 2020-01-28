import React, { Fragment } from "react";
import Header from "../containers/Header/Header";
import Footer from "../containers/Footer/Footer";
import { CssBaseline } from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    height: "100%",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center"
  },
  "@global": {
    "html,body,#root": {
      height: "100%"
    }
  },
  container: {
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px - 56px)"
    },
    [theme.breakpoints.down("xs")]: {
      height: "calc(100% - 56px - 56px)"
    }
  }
});

const Layout = ({ children, classes }) => (
  <Fragment>
    <CssBaseline />
    <Header />
    <Grid container className={classes.container}>
      <Grid item xs>
        <Paper className={classes.paper}>{children}</Paper>
      </Grid>
    </Grid>
    <Footer />
  </Fragment>
);

export default withStyles(styles)(Layout);
