import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import Auth from "../../components/Auth/Auth";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import fingerprint from "../../animations/person.json";
import { getDefaultAnimationOptions } from "../../animations/index";

const styles = {
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  typography: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
const Header = withStyles(styles)(({ classes }) => (
  <AppBar data-test="headerComponent" position="static">
    <Toolbar className={classes.toolbar}>
      <Typography variant="h5" color="inherit" className={classes.typography}>
        <Lottie
          height={50}
          width={50}
          options={getDefaultAnimationOptions(fingerprint, false)}
        />
        {"\u00A0"} <strong>Formularz</strong>
      </Typography>
      <Auth />
    </Toolbar>
  </AppBar>
));

Header.propTypes = {
  classes: PropTypes.shape({
    toolbar: PropTypes.string,
    typography: PropTypes.string
  })
};

export default Header;
