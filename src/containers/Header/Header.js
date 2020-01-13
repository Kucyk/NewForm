import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import Auth from "../../components/Auth/Auth";
import { withStyles } from "@material-ui/styles";

import PropTypes from "prop-types";

const styles = {
  flex: {
    flex: 1
  }
};
const Header = withStyles(styles)(({ classes }) => {
  return (
    <AppBar data-test='appBarComponent' position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.flex}>
          Formularz Uczestników
        </Typography>
        <Auth />
      </Toolbar>
    </AppBar>
  );
});

Header.propTypes = {
  classes: PropTypes.object,
};

export default Header;
