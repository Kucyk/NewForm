import React from "react";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const LogInformation = ({ text }) => {
  return (
    <Typography data-test="appInfoComponent" variant="h3">
      {text}
    </Typography>
  );
};

LogInformation.propTypes = {
  text: PropTypes.string
};

export default LogInformation;
