import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";

import formFields from "../../common/data/formFields.json";
import FormValidator from "../../common/utilities/FormValidator";
import {
  areFormErrorsEmpty,
  clearInputs,
  getFormData,
  getInitialInputs,
} from "../../common/utilities/helpers";
import actions from "../../features/calendar/actions";
import DB_API from "../../common/providers/DB_API";
import Form from "../../common/components/Form";
import { Button } from "../../common/components/Button";
import Title from "../../common/components/Title";

const formValidator = new FormValidator();
const DB = new DB_API();

function CalendarForm() {
  const dispatch = useDispatch();
  const initialInputs = getInitialInputs(formFields);
  const [formErrors, setFormErrors] = useState({});
  const changeHandler = (inputValues, { name, value }) => {
    setFormErrors({ ...formErrors, [name]: null });

    return { ...inputValues, [name]: value };
  };
  const [inputValues, dispatchInputValues] = useReducer(
    changeHandler,
    initialInputs
  );

  const addMeetingToApi = (meetingData) => {
    DB.add(meetingData)
      .then((newMeeting) => dispatch(actions.saveMeeting(newMeeting)))
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = formValidator.validate(formFields, inputValues);

    if (areFormErrorsEmpty(errors)) {
      const formData = getFormData(formFields, inputValues);
      addMeetingToApi(formData);
      clearInputs(formFields, dispatchInputValues);
    } else {
      setFormErrors(errors);
    }
  };

  const renderFormFields = () =>
    formFields.map((field) => {
      const { id, name } = field;

      return (
        <Form.TextInput
          key={id}
          settings={field}
          errorMessages={formErrors[name] && formErrors[name]}
          value={inputValues[name]}
          onChange={dispatchInputValues}
        />
      );
    });

  return (
    <Form onSubmit={handleSubmit}>
      <Title style={{ marginBottom: "var(--space-md)" }} variant="h2">
        Nowe spotkanie
      </Title>
      {renderFormFields()}
      <Form.FormField style={{ marginTop: "var(--space-md)" }} align="">
        <Button type="submit">Zapisz</Button>
      </Form.FormField>
    </Form>
  );
}

export default CalendarForm;
