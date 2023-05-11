import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DB_API from "../../common/providers/DB_API";
import actions from "../../features/calendar/actions";

const DB = new DB_API();

function CalendarList() {
  const meetings = useSelector(({ calendar }) => calendar.meetings);
  const dispatch = useDispatch();

  useEffect(() => {
    DB.load()
      .then((meetings) => dispatch(actions.loadMeetings(meetings)))
      .catch((error) => console.error(error));
  }, []);

  const renderMeetingsItem = ({
    id,
    date,
    time,
    email,
    firstName,
    lastName,
  }) => {
    return (
      <li key={id}>
        {date} {time} {"=>"}
        <a href={`mailto: ${email}`}>
          {firstName} {lastName}
        </a>
      </li>
    );
  };

  const renderMeetingsList = () => {
    return (
      meetings.length > 0 && meetings.map((item) => renderMeetingsItem(item))
    );
  };

  return <ul>{renderMeetingsList()}</ul>;
}

export default CalendarList;
