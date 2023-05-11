import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import DB_API from "../../common/providers/DB_API";
import actions from "../../features/calendar/actions";
import List from "../../common/components/List";
import Title from "../../common/components/Title";

const DB = new DB_API();

function CalendarList() {
  const meetings = useSelector(({ calendar }) => calendar.meetings);
  const dispatch = useDispatch();

  const loadMeetings = () =>
    DB.load()
      .then((meetings) => dispatch(actions.loadMeetings(meetings)))
      .catch((error) => console.error(error));

  useEffect(() => {
    loadMeetings();
  }, []);

  const renderMeetingItem = ({
    id,
    date,
    time,
    email,
    firstName,
    lastName,
  }) => {
    return (
      <List.Item key={id}>
        <Title variant="h4">
          {date} {time}
        </Title>
        <p>
          Spotkanie z{" "}
          <a href={`mailto: ${email}`}>
            {firstName} {lastName}
          </a>
        </p>
      </List.Item>
    );
  };

  const renderMeetingsList = () =>
    meetings.map((item) => renderMeetingItem(item));

  const renderNoMeetingsInfo = () => (
    <Title variant="h3">Brak nadchodzących spotkań</Title>
  );

  return (
    <List>
      {meetings.length > 0 ? renderMeetingsList() : renderNoMeetingsInfo()}
    </List>
  );
}

export default CalendarList;
