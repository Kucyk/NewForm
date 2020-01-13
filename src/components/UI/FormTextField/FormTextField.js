import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: 400,
      margin: 7
    },
    [theme.breakpoints.down("sm")]: {
      width: 300,
      margin: 7
    },
    [theme.breakpoints.down("xs")]: {
      width: 200,
      margin: 5
    }
  }
});

const FormTextField = withStyles(styles)(TextField);

export default function ClassesShorthand({
  defaultValue,
  onChange,
  onBlur,
  helperText,
  label,
  name,
  error,
  type
}) {
  return (
    <FormTextField
      data-test="formTextFieldComponent"
      error={error}
      helperText={helperText}
      label={label}
      name={name}
      type={type}
      defaultValue={defaultValue}
      onChange={onChange}
      onBlur={onBlur}
      color="primary"
    />
  );
}

ClassesShorthand.propTypes = {
  defaultValue:PropTypes.string,
  onChange:PropTypes.func,
  onBlur:PropTypes.func,
  helperText:PropTypes.string,
  label:PropTypes.string,
  name:PropTypes.string,
  error:PropTypes.bool,
  type:PropTypes.string
};
