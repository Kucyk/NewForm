import React from "react";
import { Formik, Form } from "formik";
import { validationSchema } from "../../../validationSchemas/authValidation/authValidation";
import { TextField } from "@material-ui/core";
import FormButton from "../../UI/FormButton/FormButton";

const AuthForm = ({ isSignIn, onAuth, handleToggle }) => {
  const handleSubmit = customData => (values, { setSubmitting, resetForm }) => {
    onAuth(values.email, values.password, customData);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 500);
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: ""
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit(isSignIn)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
        <Form
          style={{
            padding: 15,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
          }}
        >
          <TextField
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.email && touched.email ? errors.email : null}
            error={errors.email && touched.email}
            type="email"
            name="email"
            value={values.email}
            fullWidth
          />
          <br />
          <TextField
            label="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={
              errors.password && touched.password ? errors.password : null
            }
            error={errors.password && touched.password}
            type="password"
            name="password"
            value={values.password}
            fullWidth
          />
          <br />
          <FormButton type="submit" disabled={isSubmitting}>
            Wyślij
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
