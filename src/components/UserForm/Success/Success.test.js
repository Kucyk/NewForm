import React from "react";
import { shallow } from "enzyme";
import Success from "./Success";
import { findByTestAttr, checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Success {...props} />);
  return component;
};

describe("Checking PropTypes", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      firstStep: () => {}
    };
    const propsErr = checkProps(Success, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});

describe("Success Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render Success Component without errors", () => {
    const wrapper = findByTestAttr(component, "successComponent");
    expect(wrapper.length).toBe(1);
  });
});
