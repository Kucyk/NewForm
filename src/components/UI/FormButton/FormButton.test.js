import React from "react";
import { shallow } from "enzyme";
import FormButton from "./FormButton";
import { findByTestAttr,checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<FormButton {...props} />);
  return component;
};

describe("Checking PropTypes", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      type:'Test text 1',
      isSubmitting:true,
      onClick:()=>{},
      // children:<React.Fragment/>
    };
    const propsErr = checkProps(FormButton, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});

describe("FormButton Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "formButtonComponent");
    expect(wrapper.length).toBe(1);
  });
});
