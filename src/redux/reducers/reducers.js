import { ActionTypes } from "../constants/action-type";

const initialState = {
  employees: [],
  err: "",
};
const selectedState = {
  selected: {},
};

export const employeeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMPLOYEES:
      return { ...state, employees: payload };
    case ActionTypes.REMOVE_EMPLOYEE_SUCC:
      const filtred = state.employees.filter((emp) => emp.id != payload);
      console.log("filtred", filtred);
      return { ...state, employees: filtred };
    case ActionTypes.REMOVE_EMPLOYEE_ERR:
      const error = {
        name: payload.name,
        msg: payload.message,
      };

      return { ...state, err: error };

    default:
      return state;
  }
};
export const selectedOne = (state = selectedState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_EMPLOYEE:
      return { ...state, selected: payload };
    default:
      return state;
  }
};

/* export const empDelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};
 */
