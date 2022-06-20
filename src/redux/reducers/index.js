import { combineReducers } from "redux";
import { employeeReducer, selectedOne } from "./reducers";

const reducers = combineReducers({
  allEmployees: employeeReducer,
  selectedEmp: selectedOne,
});
export default reducers;
