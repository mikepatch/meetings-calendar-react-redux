import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import { StyledFormField, StyledLegend } from "../styled/FormField.styled";
import { formElementsTheme } from "../../../../theme";
import FieldError from "./FieldError";

function FormField({
  variant,
  legend,
  justify,
  align,
  style,
  children,
  errorMessages,
}) {
  return (
    <ThemeProvider theme={formElementsTheme}>
      <StyledFormField
        variant={variant}
        justify={justify}
        align={align}
        style={style}
      >
        {legend && <StyledLegend>{legend}</StyledLegend>}
        {children}
        {errorMessages && errorMessages.length !== 0 && (
          <FieldError>{errorMessages}</FieldError>
        )}
      </StyledFormField>
    </ThemeProvider>
  );
}

FormField.propTypes = {
  variant: PropTypes.string,
  legend: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  children: PropTypes.node.isRequired,
  errorMessages: PropTypes.arrayOf(PropTypes.any),
};

FormField.defaultProps = {
  variant: "column",
  legend: "",
  justify: "start",
  align: "start",
  style: {},
  errorMessages: null,
};

export default FormField;
