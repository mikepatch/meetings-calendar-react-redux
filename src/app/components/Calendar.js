import React from "react";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import actions from "../../features/calendar/actions";
import DB_API from "../../common/providers/DB_API";

const DB = new DB_API();

function Calendar() {
  const handleSaveMeeting = (meetingData) => {
    DB.add(meetingData)
      .then((newMeeting) => dispatch(actions.saveMeeting(newMeeting)))
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <CalendarList />
      <CalendarForm saveMeeting={handleSaveMeeting} />
    </section>
  );
}

export default Calendar;
