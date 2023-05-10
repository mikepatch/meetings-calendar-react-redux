import types from "./types";

const loadMeetings = (meetings) => ({
  type: types.LOAD_MEETINGS,
  meetings,
});

const saveMeeting = (meeting) => ({
  type: types.SAVE_MEETING,
  meeting,
});

export default {
  loadMeetings,
  saveMeeting,
};
