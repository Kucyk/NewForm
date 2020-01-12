import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

// The `withStyles()` higher-order component is injecting a `classes`
// prop that is used by the `Button` component.
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
