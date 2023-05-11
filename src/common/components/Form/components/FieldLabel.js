import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import StyledFieldLabel from "../styled/FieldLabel.styled";
import { formElementsTheme } from "../../../../theme";

function FieldLabel({ style, id, variant, justify, align, children }) {
  return (
    <ThemeProvider theme={formElementsTheme}>
      <StyledFieldLabel
        htmlFor={id}
        variant={variant}
        justify={justify}
        align={align}
        style={style}
      >
        {children}
      </StyledFieldLabel>
    </ThemeProvider>
  );
}

FieldLabel.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  variant: PropTypes.string,
  justify: PropTypes.string,
  align: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

FieldLabel.defaultProps = {
  id: "",
  variant: "column",
  justify: "start",
  align: "center",
  style: {},
};

export default FieldLabel;
