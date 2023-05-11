import React from 'react';
import PropTypes from 'prop-types';

import StyledFieldError from '../styled/FieldError.styled';

function FieldError({ children }) {
    return <StyledFieldError>{children}</StyledFieldError>;
}

FieldError.propTypes = {
    children: PropTypes.node.isRequired,
};

export default FieldError;
