import * as actions from "../actions/actionTypes";
import authReducer from "./auth";



describe("Form Reducer Fetch Customers", () => {
    const initialState = {
        token: null,
        userId: null,
        loading: false,
        error: null
      };
  
    const error = "error";

    const idToken= "Text 1"

    const userId= "Text 2"
  
    it("Should return new state if recieving type AUTH_START", () => {
      const state = {
        ...initialState,
        loading: true
      };
  
      const newState = authReducer(undefined, {
        type: actions.AUTH_START,
        state
      });
      expect(newState).toEqual(state);
    });

    it("Should return new state if recieving type AUTH_SUCCESS", () => {
        const state = {
          ...initialState,
          token:idToken,
          userId,
        };
    
        const newState = authReducer(undefined, {
          type: actions.AUTH_SUCCESS,
          idToken,
          userId
        });
        expect(newState).toEqual(state);
      });

      it("Should return new state if recieving type AUTH_FAIL", () => {
        const state = {
          ...initialState,
            error
        };
    
        const newState = authReducer(undefined, {
          type: actions.AUTH_FAIL,
            error
        });
        expect(newState).toEqual(state);
      });

      it("Should return new state if recieving type AUTH_LOGOUT", () => {
        const newState = authReducer(undefined, {
          type: actions.AUTH_LOGOUT,
        });
        expect(newState).toEqual(initialState);
      });

  });