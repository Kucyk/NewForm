import React from "react";
import { shallow } from "enzyme";
import FormTextField from "./FormTextField";
import { findByTestAttr, checkProps } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<FormTextField {...props} />);
  return component;
};

describe('Checking PropTypes',()=>{
  it('Should not throw a warning',()=>{
    const expectedProps={
      defaultValue:'Test text 1',
      onChange:()=>{},
      onBlur:()=>{},
      helperText:'Test text 2',
      label:'Test text 3',
      name:'Test text 4',
      error:true,
      type:'Test text 5'
    }
    const propsErr=checkProps(FormTextField , expectedProps)
    expect(propsErr).toBeUndefined()
  })
})

describe("FormTextField Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render FormTextField Component without errors", () => {
    const wrapper = findByTestAttr(component, "formTextFieldComponent");
    expect(wrapper.length).toBe(1);
  });
});
