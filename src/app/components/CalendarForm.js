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
    formFields.map(({ label, name, id, type, placeholder }) => (
      <div key={id}>
        <label htmlFor={id}>
          {label}:{" "}
          <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={inputValues[name]}
            onChange={(e) => dispatchInputValues(e.target)}
          />
        </label>
        {formErrors[name] && <small>{formErrors[name]}</small>}
      </div>
    ));

  return (
    <form action="" noValidate onSubmit={handleSubmit}>
      {renderFormFields()}
      <div>
        <input type="submit" value="zapisz" />
      </div>
    </form>
  );
}

export default CalendarForm;
