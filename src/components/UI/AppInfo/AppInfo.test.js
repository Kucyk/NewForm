import React from "react";
import { shallow } from "enzyme";
import AppInfo from "./AppInfo";
import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<AppInfo {...props} />);
  return component;
};

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
