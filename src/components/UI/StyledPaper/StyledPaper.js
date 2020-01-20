import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";

const styles = theme => ({
  root: {
    padding: theme.spacing(2)
  }
});

const StyledPaper = withStyles(styles)(Paper);

const ClassesShorthand = ({ children }) => {
  return <StyledPaper elevation={3}>{children}</StyledPaper>;
};

export default ClassesShorthand;
