import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import actions from "../../features/calendar/actions";
import DB_API from "../../common/providers/DB_API";

const DB = new DB_API();

function Calendar() {
  const meetings = useSelector(({calendar}) => calendar.meetings);
  const dispatch = useDispatch();

  useEffect(() => {
    DB.load()
      .then((meetings) => dispatch(actions.loadMeetings(meetings)))
      .catch((error) => console.error(error));
  }, []);

  const handleSaveMeeting = (meetingData) => {
    DB.add(meetingData)
      .then((newMeeting) => dispatch(actions.saveMeeting(newMeeting)))
      .catch((error) => console.error(error));
  };

  return (
    <section>
      <CalendarList meetings={meetings} />
      <CalendarForm saveMeeting={handleSaveMeeting} />
    </section>
  );
}

export default Calendar;
