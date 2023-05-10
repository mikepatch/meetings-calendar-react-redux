import { combineReducers } from "redux";
import meetingsReducer from "../features/meetings";

const rootReducer = combineReducers({
  meetings: meetingsReducer,
});

export default rootReducer;
