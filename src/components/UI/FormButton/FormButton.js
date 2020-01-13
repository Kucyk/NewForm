import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    margin: "40px 20px",
    [theme.breakpoints.up("md")]: {
      width: 300
    },
    [theme.breakpoints.down("sm")]: {
      width: 200
    },
    [theme.breakpoints.down("xs")]: {
      width: 100
    }
  }
});

const FormButton = withStyles(styles)(Button);

export default function ClassesShorthand(props) {
  return (
    <FormButton
      data-test="formButtonComponent"
      type={props.type}
      disabled={props.isSubmitting}
      variant="outlined"
      color="primary"
      onClick={props.onClick}
    >
      {props.children}
    </FormButton>
  );
}
