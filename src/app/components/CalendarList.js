import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { load, remove } from "../../common/providers/meetingsProvider";
import actions from "../../features/calendar/actions";
import List from "../../common/components/List";
import Title from "../../common/components/Title";
import CalendarItem from "./CalendarItem";

function CalendarList() {
  const meetings = useSelector(({ calendar }) => calendar.meetings);
  const dispatch = useDispatch();

  const loadMeetingsByProvider = () =>
    load()
      .then((meetings) => dispatch(actions.loadMeetings(meetings)))
      .catch((error) => console.error(error));

  const removeMeetingByProvider = (id) =>
    remove(id)
      .then(() => loadMeetingsByProvider())
      .catch((error) => console.error(error));

  useEffect(() => {
    loadMeetingsByProvider();
  }, []);

  const handleRemoveMeeting = (id) => removeMeetingByProvider(id);

  const getMeetingItem = (data) => {
    const { id } = data;

    return (
      <CalendarItem key={id} data={data} handleRemove={handleRemoveMeeting} />
    );
  };

  const renderMeetingsList = () => (
    <List>{meetings.map((item) => getMeetingItem(item))}</List>
  );

  const renderNoMeetingsInfo = () => (
    <p style={noMeetingsInfoStyles}>Brak nadchodzących spotkań</p>
  );

  return (
    <section>
      <Title variant="h2">Nadchodzące spotkania</Title>
      {meetings.length > 0 ? renderMeetingsList() : renderNoMeetingsInfo()}
    </section>
  );
}

const noMeetingsInfoStyles = { marginTop: "var(--space-lg)" };

export default CalendarList;
