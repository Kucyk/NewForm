import React, { Component } from "react";
import { Formik, Form } from "formik";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

import UserForm from "../../components/CustomerForm/UserForm/UserForm";
import { validationSchema } from "../../validationSchemas/formValidation/formValidation";

class CustomerForm extends Component {
  state = {
    step: 1
  };

  render() {
    //Proceed to next step
    const nextStep = () => {
      this.setState(prevState => {
        return {
          step: prevState.step + 1
        };
      });
    };

    //Proceed to previous step
    const prevStep = () => {
      this.setState(prevState => {
        return {
          step: prevState.step - 1
        };
      });
    };

    //go to beggining
    const firstStep = () => {
      this.setState({
        step: 1
      });
    };

    const { step } = this.state;
    const { loading, error } = this.props;

    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          occupation: "",
          city: "",
          number: ""
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          setTimeout(() => {
            this.props.onPostData(values);

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
  }
}
const mapStateToProps = state => {
  return {
    data: state.form.data,
    error: state.form.error,
    loading: state.form.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onPostData: value => dispatch(actions.postData(value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerForm);
