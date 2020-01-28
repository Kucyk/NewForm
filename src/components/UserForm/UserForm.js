import React from "react";
import FormUserDetails from "./FormUserDetails/FormUserDetails";
import Confirm from "./Confirm/Confirm";
import Success from "./Success/Success";
import withHandleError from "../../hoc/withHandleError/withHandleError";
import withHandleLoading from "../../hoc/withHandleLoading/withHandleLoading";
import PropTypes from "prop-types";

const SuccessWithHandleErrorAndLoading = withHandleLoading(
  withHandleError(Success)
);

const UserForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  step,
  nextStep,
  prevStep,
  firstStep,
  loading,
  error
}) => {
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          values={values}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          errors={errors}
          values={values}
          isSubmitting={isSubmitting}
          touched={touched}
        />
      );
    case 3:
      return (
        <SuccessWithHandleErrorAndLoading
          firstStep={firstStep}
          loading={loading}
          error={error}
        />
      );

    default:
      return step;
  }
};

UserForm.propTypes = {
  values: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string
  }),
  errors: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    city: PropTypes.string,
    number: PropTypes.string
  }),
  touched: PropTypes.shape({
    firstName: PropTypes.bool,
    lastName: PropTypes.bool,
    email: PropTypes.bool,
    city: PropTypes.bool,
    number: PropTypes.bool
  }),
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  isSubmitting: PropTypes.bool,
  step: PropTypes.number,
  nextStep: PropTypes.func,
  prevStep: PropTypes.func,
  firstStep: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.bool
};

export default UserForm;
