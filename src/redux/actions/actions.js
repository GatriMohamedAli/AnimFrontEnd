import { ActionTypes } from "../constants/action-type";
import axios from "axios";
import { useDispatch } from "react-redux";

export const setEmployees = (employees) => {
  return {
    type: ActionTypes.SET_EMPLOYEES,
    payload: employees,
  };
};

export const selectedEmployees = (id) => {
  return {
    type: ActionTypes.SELECTED_EMPLOYEE,
    payload: id,
  };
};

////////////////////////////////// DELETE
export const deleteEmpSucc = (id) => {
  return {
    type: ActionTypes.REMOVE_EMPLOYEE_SUCC,
    payload: id,
  };
};
export const deleteEmpError = (err) => {
  return {
    type: ActionTypes.REMOVE_EMPLOYEE_ERR,
    payload: err,
  };
};
////////////////////////////////// UPDATE
