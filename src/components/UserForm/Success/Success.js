import React from "react";
import FormButton from "../../UI/FormButton/FormButton";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import StyledPaper from "../../UI/StyledPaper/StyledPaper";

const Success = ({ firstStep }) => {
  return (
    <StyledPaper>
      <Typography
        data-test="successComponent"
        variant="h5"
        color="secondary"
        style={{ textTransform: "capitalize" }}
      >
        DZIEKUJEMY ZA DODANIE OSOBY!
      </Typography>
      <FormButton onClick={firstStep}>Dodaj Kolejną osobę !</FormButton>
    </StyledPaper>
  );
};

Success.propTypes = {
  firstStep: PropTypes.func
};

export default Success;
