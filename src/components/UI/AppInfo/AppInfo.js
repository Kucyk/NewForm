import React from "react";
import { Typography } from "@material-ui/core";

const LogInformation = ({ text }) => {
  return (
    <Typography data-test="appInfoComponent" variant="h3">
      {text}
    </Typography>
  );
};

export default LogInformation;
