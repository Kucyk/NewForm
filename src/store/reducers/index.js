import formReducer from "./form";
import authReducer from "./auth";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer
});

export default rootReducer;
