import types from "./types";

const initState = { meetings: [] };

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_MEETINGS:
      return {
        ...state,
        meetings: action.meetings,
      };

    case types.SAVE_MEETING:
      return {
        ...state,
        meetings: [...state.meetings, action.meeting],
      };
    default:
      return state;
  }
};

export default calendarReducer;
