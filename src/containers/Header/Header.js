import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core/";
import Auth from "../../components/Auth/Auth";
import { withStyles } from "@material-ui/styles";

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

export default Header;
