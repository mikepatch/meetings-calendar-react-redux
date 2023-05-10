import React from 'react';
import { connect } from "react-redux";

import CalendarList from "./CalendarList";
import CalendarForm from "./CalendarForm";
import actions from "../../features/calendar/actions";
import DB_API from "../../common/providers/DB_API";

class Calendar extends React.Component {
  DB = new DB_API();

  loadMeetingsFromApi() {
    this.DB.load()
      .then((meetings) => this.props.loadMeetings(meetings))
      .catch((error) => console.error(error));
  }

  sendMeetingToApi = (meetingData) => {
    this.DB.add(meetingData)
      .then((meetingData) => this.props.saveMeeting(meetingData))
      .catch((error) => console.error(error));
  };

  componentDidMount() {
    this.loadMeetingsFromApi();
  }

  render() {
    return (
      <section>
        <CalendarList meetings={this.props.meetings} />
        <CalendarForm saveMeeting={this.sendMeetingToApi} />
      </section>
    );
  }
}

const mapStateToProps = (state, props) => state.meetings;

const mapActionToProps = {
  loadMeetings: actions.loadMeetings,
  saveMeeting: actions.saveMeeting,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);