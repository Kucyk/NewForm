import React from "react";
import AppInfo from "../../components/UI/AppInfo/AppInfo";

export default WrappedComponent => {
  const hocComponent = ({ error, ...props }) => {
    if (error) {
      return <AppInfo text="COŚ POSZŁO NIE TAK" />;
    }

    return <WrappedComponent {...props} />;
  };

  return hocComponent;
};
