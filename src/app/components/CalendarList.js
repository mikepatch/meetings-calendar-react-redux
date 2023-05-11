import React from "react";

function CalendarList({ meetings }) {
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
