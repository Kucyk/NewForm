import App from "./App";
import { shallow } from "enzyme";
import { findByTestAttr, testStore, checkProps } from "./Utils/index";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      
    };
    wrapper = setUp(initialState);
  });

  it("Should render App Component without errors", () => {
    const component = findByTestAttr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});

describe("Checking PropTypes", () => {
  it("Should not throw a warning", () => {
    const expectedProps = {
      isAuthenticated: true,
      onTryAutoSignUp: () => {}
    };
    const propsErr = checkProps(App, expectedProps);
    expect(propsErr).toBeUndefined();
  });
});
