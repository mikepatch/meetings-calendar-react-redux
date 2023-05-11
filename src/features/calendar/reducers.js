import types from "./types";

const initState = { meetings: [] };

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
    case types.LOAD_MEETINGS:
      return {
        ...state,
        meetings: action.payload,
      };

    case types.SAVE_MEETING:
      return {
        ...state,
        meetings: [...state.meetings, action.payload],
      };

    default:
      return state;
  }
};

export default calendarReducer;
