import React from "react";
import FormButton from "../../UI/FormButton/FormButton";
import { List, ListItem, ListItemText } from "@material-ui/core";
import PropTypes from "prop-types";
import StyledPaper from "../../UI/StyledPaper/StyledPaper";

const Confirm = ({ prevStep, isSubmitting, values, errors, touched }) => {
  const convertToLabel = text => {
    switch (text) {
      case "firstName":
        return "Imię";
      case "lastName":
        return "Nazwisko";
      case "email":
        return "Email";
      case "city":
        return "Miasto";
      case "number":
        return "Numer Telefonu";
      default:
        return text;
    }
  };

  return (
    <StyledPaper>
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
    </StyledPaper>
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
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    email: PropTypes.bool,
    city: PropTypes.bool,
    number: PropTypes.bool
  }),
  prevStep: PropTypes.func,
  isSubmitting: PropTypes.bool
};

export default Confirm;
