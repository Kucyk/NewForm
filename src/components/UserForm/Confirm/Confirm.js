import React, { Fragment } from "react";
import FormButton from "../../UI/FormButton/FormButton";
import { List, ListItem, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";

const Confirm = ({ prevStep, isSubmitting, values, errors, touched }) => {
  const convertToLabel = text => {
    switch (text) {
      case "firstName":
        return "Imię";
      case "lastName":
        return "Nazwisko";
      case "email":
        return "Email";
      case "occupation":
        return "Zawód";
      case "city":
        return "Miasto";
      case "number":
        return "Numer Telefonu";
      default:
        return text;
    }
  };

  return (
    <Fragment>
      <List component="nav">
        {Object.keys(values).map(value => (
          <ListItem button key={value}>
            <ListItemText
              style={
                errors[value] || !Object.keys(touched).length
                  ? styles.listError
                  : styles.list
              }
              primary={convertToLabel(value)}
              secondary={values[value] ? values[value] : "Pole obowiązkowe"}
            />
          </ListItem>
        ))}
      </List>
      <FormButton onClick={prevStep}>Wstecz</FormButton>
      <FormButton type="submit" disabled={isSubmitting}>
        Wyślij
      </FormButton>
    </Fragment>
  );
};

const styles = {
  list: {
    textAlign: "center"
  },
  listError: {
    textAlign: "center",
    border: "solid 1px red",
    borderRadius: "3px",
    color: "red"
  }
};

Confirm.propTypes = {
  prevStep: PropTypes.func,
  touched: PropTypes.object,
  errors: PropTypes.object,
  values: PropTypes.object,
  isSubmitting: PropTypes.bool
};

export default Confirm;
