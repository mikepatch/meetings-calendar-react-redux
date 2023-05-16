import React, { useReducer, useState } from "react";
import { useDispatch } from "react-redux";

import formFields from "../../common/data/formFields.json";
import {
  areFormErrorsEmpty,
  clearInputs,
  getFormData,
  getInitialInputs,
} from "../../common/utilities/helpers";
import { validateFields } from "../../common/utilities/formValidation";
import { add } from "../../common/providers/meetingsProvider";
import actions from "../../features/calendar/actions";
import Wrapper from "../../common/components/Wrapper";
import Form from "../../common/components/Form";
import { Button } from "../../common/components/Button";
import Title from "../../common/components/Title";

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

  const addMeetingByProvider = (meetingData) => {
    add(meetingData)
      .then((newMeeting) => dispatch(actions.saveMeeting(newMeeting)))
      .catch((error) => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateFields(formFields, inputValues);

    if (areFormErrorsEmpty(errors)) {
      const formData = getFormData(formFields, inputValues);
      addMeetingByProvider(formData);
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
    <Wrapper as="aside" style={wrapperStyles} variant="neumorphic">
      <Form onSubmit={handleSubmit}>
        <Title style={formTitleStyles} variant="h3">
          Nowe spotkanie
        </Title>
        {renderFormFields()}
        <Form.FormField style={formButtonFieldStyles} align="">
          <Button type="submit">Zapisz</Button>
        </Form.FormField>
      </Form>
    </Wrapper>
  );
}

const wrapperStyles = {
  alignItems: "center",
  display: "flex",
  left: "0",
  position: "sticky",
  top: "var(--space-lg)",
};
const formTitleStyles = { marginBottom: "var(--space-md)" };
const formButtonFieldStyles = { marginTop: "var(--space-md)" };

export default CalendarForm;
