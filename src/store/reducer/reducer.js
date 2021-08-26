import { createStore } from "redux";

const initialState = {
  holidays: {},
};

const reducer = (state = initialState, action) => {
  if (action.type === "AddHolidays") {
    return {
      holidays: action.payload,
    };
  }
  return state;
};

const store = createStore(reducer);
export default store;
