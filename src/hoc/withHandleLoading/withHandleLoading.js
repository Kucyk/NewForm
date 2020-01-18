import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";

export default WrappedComponent => {
  const hocComponent = ({ loading, ...props }) => {
    if (loading) {
      return <CircularProgress />;
    }

    return <WrappedComponent {...props} />;
  };

  hocComponent.propTypes = {
    loading: PropTypes.bool,
    props: PropTypes.any
  };

  return hocComponent;
};
