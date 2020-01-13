import checkPropTypes from "check-prop-types";
import {applyMiddleware,createStore} from 'redux'
import rootReducer from './../reducers/index'
import {middlewares} from './../createStore'

export const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps=(component,expectedProps)=>{
    const propsErr=checkPropTypes(component.propTypes,expectedProps,'props',component.name)
    return propsErr
}
