import React from "react";
import AppInfo from "../../components/UI/AppInfo/AppInfo";

import PropTypes from "prop-types";

export default WrappedComponent => {
  const hocComponent = ({ error, ...props }) => {
    if (error) {
      return <AppInfo text="COŚ POSZŁO NIE TAK" />;
    }

    return <WrappedComponent {...props} />;
  };


  hocComponent.propTypes = {
    error: PropTypes.bool,
    props: PropTypes.any,
  };

  return hocComponent;
};
