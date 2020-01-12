import React from "react";
import FormUserDetails from "./FormUserDetails/FormUserDetails";
import Confirm from "./Confirm/Confirm";
import Success from "./Success/Success";
import withHandleError from "../../../hoc/withHandleError/withHandleError";
import withHandleLoading from "../../../hoc/withHandleLoading/withHandleLoading";

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

export default UserForm;
