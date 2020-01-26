import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr,checkProps } from '../../../Utils/index';
import TableToolbar from "./TableToolbar";

const setUp = (props = {}) => {
  const component = shallow(<TableToolbar {...props} />);
  return component;
};

describe('Checking PropTypes',()=>{
    it('Should not throw a warning',()=>{
      const expectedProps={
            rows: [],
            handleDelete: ()=>{},
            selectedRows:{}
      }
      const propsErr=checkProps(TableToolbar , expectedProps)
      expect(propsErr).toBeUndefined()
    })
  })

describe("TableToolbar Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render TableToolbar Component without errors", () => {
    const wrapper = findByTestAttr(component, "tableToolbarComponent");
    expect(wrapper.length).toBe(1);
  });
});