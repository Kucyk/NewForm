import React from "react";
import { shallow } from "enzyme";
import AppInfo from "./AppInfo";
import { findByTestAttr, checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<AppInfo {...props} />);
  return component;
};

describe("Checking PropTypes", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      text: "Test text 1"
    };
    const propsErr = checkProps(AppInfo, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});

describe("AppInfo Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "appInfoComponent");
    expect(wrapper.length).toBe(1);
  });
});
