import types from "./types";

const loadMeetings = (meetings) => ({
  type: types.LOAD_MEETINGS,
  payload: meetings,
});

const saveMeeting = (meeting) => ({
  type: types.SAVE_MEETING,
  payload: meeting,
});

export default {
  loadMeetings,
  saveMeeting,
};
