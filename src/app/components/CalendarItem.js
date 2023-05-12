import React from "react";
import PropTypes from "prop-types";

import List from "../../common/components/List";
import Title from "../../common/components/Title";
import { Button } from "../../common/components/Button";

function CalendarItem({
  data: { id, date, time, email, firstName, lastName },
  handleRemove,
}) {
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
      <Button onClick={() => handleRemove(id)}>Usuń</Button>
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
