import React from "react";
import { shallow } from "enzyme";
import AuthForm from "./AuthForm";
import { findByTestAttr,checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<AuthForm handleSubmit={() => {}} {...props} />);
  return component;
};

describe('Checking PropTypes',()=>{
  it('Should not throw a warning',()=>{
    const expectedProps={
      isSignIn: true,
      onAuth: ()=>{

      }
    }
    const propsErr=checkProps(AuthForm , expectedProps)
    expect(propsErr).toBeUndefined()
  })
})

describe("AuthForm Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render AuthForm Component without errors", () => {
    const wrapper = findByTestAttr(component, "authFormComponent");
    expect(wrapper.length).toBe(1);
  });
});