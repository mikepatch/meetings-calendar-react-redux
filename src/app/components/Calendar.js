import React from "react";

import Wrapper from "../../common/components/Wrapper";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";

function Calendar() {
  return (
    <Wrapper variant="neumorphic" style={globalWrapperStyles}>
      <CalendarForm />
      <CalendarList />
    </Wrapper>
  );
}

const globalWrapperStyles = {
  boxSizing: "border-box",
  display: "grid",
  gap: "var(--space-lg)",
  gridTemplateColumns: "auto 1fr",
  margin: "var(--space-lg) auto",
  maxWidth: "1280px",
  position: "relative",
};

export default Calendar;
