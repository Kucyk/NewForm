import React,{Fragment} from "react";
import FormButton from "../../../UI/FormButton/FormButton";
import { Typography } from "@material-ui/core";

import PropTypes from "prop-types";


const Success = ({ firstStep }) => {
  return (
    <Fragment>
      <Typography
      data-test='successComponent'
        variant="h5"
        color="secondary"
        style={{ textTransform: "capitalize" }}
      >
        DZIEKUJEMY ZA DODANIE OSOBY!
      </Typography>
      <FormButton onClick={firstStep}>Dodaj Kolejną osobę !</FormButton>
    </Fragment>
  );
};

Success.propTypes={
  firstStep: PropTypes.func,
}

export default Success;
