import React from "react";

import Wrapper from "../../common/components/Wrapper";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";

function Calendar() {
  return (
    <Wrapper variant="neumorphic" style={globalWrapperStyles}>
      <aside>
        <Wrapper style={asideWrapperStyles} variant="neumorphic">
          <CalendarForm />
        </Wrapper>
      </aside>
      <section>
        <CalendarList />
      </section>
    </Wrapper>
  );
}

const globalWrapperStyles = {
  boxSizing: "border-box",
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  margin: "var(--space-lg) auto",
  maxWidth: "1280px",
  position: "relative",
};
const asideWrapperStyles = {
  alignItems: "center",
  display: "flex",
  left: "0",
  position: "sticky",
  top: "var(--space-lg)",
};

export default Calendar;
