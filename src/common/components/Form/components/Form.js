import React from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";
import TextInput from "./TextInput";
import StyledForm from "../styled/Form.styled";

function Form({ style = {}, children, onSubmit }) {
  return (
    <StyledForm style={style} noValidate onSubmit={onSubmit}>
      {children}
    </StyledForm>
  );
}

Form.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  style: {},
};

export default Object.assign(Form, { FormField, TextInput });
