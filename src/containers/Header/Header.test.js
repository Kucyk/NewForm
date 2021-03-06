import Header from "./Header";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "../../Utils/index";
import React from "react";

const setUp = () => {
  const wrapper = shallow(<Header />).dive();
  return wrapper;
};

describe("Header Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render Header Component without errors", () => {
    const component = findByTestAttr(wrapper, "headerComponent");
    expect(component.length).toBe(1);
  });
});

describe("Checking PropTypes", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      classes: {
        toolbar: 'Text 1',
        typography: 'Text 2'
      }
    };
    const propsErr = checkProps(Header, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});
