import React from "react";
import { shallow } from "enzyme";
import FormButton from "./FormButton";
import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<FormButton {...props} />);
  return component;
};

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
