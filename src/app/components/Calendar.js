import React from "react";

import Wrapper from "../../common/components/Wrapper";
import CalendarForm from "./CalendarForm";
import CalendarList from "./CalendarList";

function Calendar() {
  return (
    <Wrapper style={globalWrapperStyles}>
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
  display: "grid",
  gridTemplateColumns: "auto 1fr",
};
const asideWrapperStyles = {
  alignItems: "center",
  display: "flex",
  height: "100vh",
  left: "0",
  position: "sticky",
  top: "0",
};

export default Calendar;
