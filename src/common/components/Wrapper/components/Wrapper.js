import React from 'react';
import PropTypes from 'prop-types';

import StyledWrapper from '../styled/Wrapper.styled';

function Wrapper({ as, style, variant, children }) {
  return (
    <StyledWrapper as={as} style={style} variant={variant}>
      {children}
    </StyledWrapper>
  );
}

Wrapper.propTypes = {
  as: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
  as: "div",
  style: {},
  variant: "blank",
};

export default Wrapper;
