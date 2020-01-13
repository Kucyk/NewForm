import React from "react";
import { shallow } from "enzyme";
import LoginInfo from "./LoginInfo";
import { findByTestAttr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<LoginInfo {...props} />);
  return component;
};

describe("LoginInfo Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttr(component, "LoginInfoComponent");
    expect(wrapper.length).toBe(1);
  });
});
