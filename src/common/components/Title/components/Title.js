import React from "react";
import PropTypes from "prop-types";

import StyledTitle from "../styled/Title.styled";
import { ThemeProvider } from "styled-components";
import { headingsTheme } from "../../../../theme";

function Title({ style, variant, children }) {
  return (
    <ThemeProvider theme={headingsTheme}>
      <StyledTitle style={style} as={variant} variant={variant}>
        {children}
      </StyledTitle>
    </ThemeProvider>
  );
}

Title.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  variant: PropTypes.string,
};

Title.defaultProps = {
  style: {},
  variant: "h1",
};

export default Title;
