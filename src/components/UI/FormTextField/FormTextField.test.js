import React from "react";
import { shallow } from "enzyme";
import FormTextField from "./FormTextField";
import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<FormTextField {...props} />);
  return component;
};

describe("FormTextField Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "formTextFieldComponent");
    expect(wrapper.length).toBe(1);
  });
});
