import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default WrappedComponent => {
  const hocComponent = ({ loading, ...props }) => {
    if (loading) {
      return <CircularProgress />;
    }

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};
