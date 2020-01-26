import React from "react";
import { Typography } from "@material-ui/core";
import Lottie from "react-lottie";
import fingerprint from "../../../animations/fingerprint.json";
import { getDefaultAnimationOptions } from "../../../animations/index";

const LogInformation = () => (
  <Typography data-test="LoginInfoComponent" variant="h3">
    ZALOGUJ SIĘ
    <Lottie
      height={200}
      width={200}
      options={getDefaultAnimationOptions(fingerprint, true)}
    />
  </Typography>
);

export default LogInformation;
