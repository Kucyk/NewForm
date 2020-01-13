import React from "react";
import FormTextField from "../../../UI/FormTextField/FormTextField";
import FormButton from "../../../UI/FormButton/FormButton";

import PropTypes from "prop-types";

const FormUserDetails = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  nextStep
}) => {
  return (
    <div>
      <FormTextField
        error={errors.firstName && touched.firstName}
        label="Imię"
        name="firstName"
        helperText={
          errors.firstName && touched.firstName ? errors.firstName : null
        }
        defaultValue={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormTextField
        error={errors.lastName && touched.lastName}
        label="Nazwisko"
        name="lastName"
        helperText={
          errors.lastName && touched.lastName ? errors.lastName : null
        }
        defaultValue={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormTextField
        error={errors.email && touched.email}
        type="email"
        label="Email"
        name="email"
        helperText={errors.email && touched.email ? errors.email : null}
        defaultValue={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormTextField
        error={errors.occupation && touched.occupation}
        helperText={
          errors.occupation && touched.occupation ? errors.occupation : null
        }
        label="Zawód"
        name="occupation"
        defaultValue={values.occupation}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormTextField
        error={errors.city && touched.city}
        helperText={errors.city && touched.city ? errors.city : null}
        label="Miasto"
        name="city"
        defaultValue={values.city}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormTextField
        error={errors.number && touched.number}
        helperText={errors.number && touched.number ? errors.number : null}
        label="Numer Telefonu"
        name="number"
        defaultValue={values.number}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <br />
      <FormButton onClick={nextStep}>Dalej</FormButton>
    </div>
  );
};

FormUserDetails.propTypes={
  values:PropTypes.object,
  errors:PropTypes.object,
  touched:PropTypes.object,
  handleChange:PropTypes.func,
  handleBlur:PropTypes.func,
  nextStep:PropTypes.func
}

export default FormUserDetails;
