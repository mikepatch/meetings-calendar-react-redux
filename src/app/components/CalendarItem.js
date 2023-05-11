import React from "react";
import PropTypes from "prop-types";

import List from "../../common/components/List";
import Title from "../../common/components/Title";

function CalendarItem({ data: { date, time, email, firstName, lastName } }) {
  return (
    <List.Item>
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
}

CalendarItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
};

CalendarItem.defaultProps = {
  data: {},
};

export default CalendarItem;
