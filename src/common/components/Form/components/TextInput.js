import React from "react";
import PropTypes from "prop-types";

import StyledTextInput from "../styled/TextInput.styled";
import FormField from "./FormField";
import FieldLabel from "./FieldLabel";

function TextInput({
  style,
  settings: { id, label, name, type, placeholder },
  errorMessages,
  value,
  onChange,
}) {
  return (
    <FormField errorMessages={errorMessages}>
      <FieldLabel id={id}>{label}</FieldLabel>
      <StyledTextInput
        style={style}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target)}
      />
    </FormField>
  );
}

TextInput.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  settings: PropTypes.objectOf(PropTypes.any).isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.any),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};

TextInput.defaultProps = {
  style: {},
  errorMessages: [],
  value: "",
};

export default TextInput;
