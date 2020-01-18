import * as actions from "../actions/actionTypes";
import formReducer from "./form";

describe("Form Reducer Fetch Customers", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
    customers: null
  };

  const error = "error";

  const customers = [
    {
      city: "Test 1",
      email: "Test 1",
      firstName: "Test 1",
      lastName: "Test 1",
      number: 123,
      occupation: "Test 1"
    },
    {
      city: "Test 2",
      email: "Test 2",
      firstName: "Test 2",
      lastName: "Test 2",
      number: 123,
      occupation: "Test 2"
    },
    {
      city: "Test 3",
      email: "Test 3",
      firstName: "Test 3",
      lastName: "Test 3",
      number: 123,
      occupation: "Test 3"
    }
  ];

  it("Should return default state", () => {
    const newState = formReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      loading: true
    };

    const newState = formReducer(undefined, {
      type: actions.FETCH_CUSTOMERS_START,
      state
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      customers
    };

    const newState = formReducer(undefined, {
      type: actions.FETCH_CUSTOMERS_SUCCESS,
      customers
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      error
    };

    const newState = formReducer(undefined, {
      type: actions.FETCH_CUSTOMERS_FAIL,
      error
    });
    expect(newState).toEqual(state);
  });
});

describe("Form Reducer Post Data", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
    customers: null
  };

  const error = "error";

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      loading: true
    };

    const newState = formReducer(undefined, {
      type: actions.POST_DATA_START,
      state
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState
    };

    const newState = formReducer(undefined, {
      type: actions.POST_DATA_SUCCESS
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      error
    };

    const newState = formReducer(undefined, {
      type: actions.POST_DATA_FAIL,
      error
    });
    expect(newState).toEqual(state);
  });
});

describe("Form Reducer Delete Customer", () => {
  const initialState = {
    data: null,
    loading: false,
    error: null,
    customers: null
  };

  const error = "error";

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      loading: true
    };

    const newState = formReducer(undefined, {
      type: actions.DELETE_CUSTOMER_START,
      state
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState
    };

    const newState = formReducer(undefined, {
      type: actions.DELETE_CUSTOMER_SUCCESS
    });
    expect(newState).toEqual(state);
  });

  it("Should return new state if recieving type", () => {
    const state = {
      ...initialState,
      error
    };

    const newState = formReducer(undefined, {
      type: actions.DELETE_CUSTOMER_FAIL,
      error
    });
    expect(newState).toEqual(state);
  });
});
