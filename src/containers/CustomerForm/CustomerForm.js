import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import UserForm from "../../components/UserForm/UserForm";
import { validationSchema } from "../../validationSchemas/formValidation/formValidation";

const CustomerForm = ({ loading, error, onPostData }) => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const firstStep = () => {
    setStep(1);
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        city: "",
        number: ""
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setTimeout(() => {
          onPostData(values);
          setSubmitting(false);
          nextStep();
          resetForm();
        }, 500);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting
      }) => (
        <Form>
          <UserForm
            values={values}
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            handleBlur={handleBlur}
            isSubmitting={isSubmitting}
            step={step}
            nextStep={nextStep}
            prevStep={prevStep}
            firstStep={firstStep}
            loading={loading}
            error={error}
          />
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = state => ({
  data: state.form.data,
  error: state.form.error,
  loading: state.form.loading
});

const mapDispatchToProps = dispatch => ({
  onPostData: value => dispatch(actions.postData(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
