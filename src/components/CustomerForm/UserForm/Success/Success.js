import React,{Fragment} from "react";
import FormButton from "../../../UI/FormButton/FormButton";
import { Typography } from "@material-ui/core";

const Success = ({ firstStep }) => {
  return (
    <Fragment>
      <Typography
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

export default Success;
