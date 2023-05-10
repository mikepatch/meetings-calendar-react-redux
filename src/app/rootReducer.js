import { combineReducers } from "redux";
import calendarReducer from "../features/calendar";

const rootReducer = combineReducers({
  meetings: calendarReducer,
});

export default rootReducer;
