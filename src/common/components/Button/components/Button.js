import React from "react";
import PropTypes from "prop-types";

import StyledButton from "../styled/Button.styled";

function Button({ type, variant, style, isOpen, children, onClick, innerRef }) {
  return (
    <StyledButton
      type={type}
      variant={variant}
      style={style}
      isOpen={isOpen}
      onClick={onClick}
      ref={innerRef && innerRef}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.any),
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  innerRef: PropTypes.objectOf(PropTypes.any),
};

Button.defaultProps = {
  type: "button",
  variant: "styled",
  style: {},
  isOpen: false,
  onClick: null,
  innerRef: null,
};

export default Button;
