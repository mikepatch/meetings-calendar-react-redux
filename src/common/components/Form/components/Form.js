import React from "react";
import PropTypes from "prop-types";

import FormField from "./FormField";
import TextInput from "./TextInput";
import StyledForm from "../styled/Form.styled";
import Wrapper from "../../Wrapper";

function Form({ style = {}, children, onSubmit }) {
  return (
    <Wrapper variant="neumorphic">
      <StyledForm style={style} noValidate onSubmit={onSubmit}>
        {children}
      </StyledForm>
    </Wrapper>
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
