import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    margin: "40px 10px",
    [theme.breakpoints.up("md")]: {
      width: 300
    },
    [theme.breakpoints.down("sm")]: {
      width: 200
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 100
    }
  }
});

const FormButton = withStyles(styles)(Button);

export default function StyledButton({
  type,
  isSubmitting,
  onClick,
  children
}) {
  return (
    <FormButton
      data-test="formButtonComponent"
      type={type}
      disabled={isSubmitting}
      variant="outlined"
      color="primary"
      onClick={onClick}
    >
      {children}
    </FormButton>
  );
}

StyledButton.propTypes = {
  type: PropTypes.string,
  isSubmitting: PropTypes.bool,
  onClick: PropTypes.func
};
