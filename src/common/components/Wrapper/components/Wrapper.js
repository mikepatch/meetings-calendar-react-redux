import React from 'react';
import PropTypes from 'prop-types';

import StyledWrapper from '../styled/Wrapper.styled';

function Wrapper({ style, variant, children }) {
    return (
        <StyledWrapper style={style} variant={variant}>
            {children}
        </StyledWrapper>
    );
}

Wrapper.propTypes = {
    style: PropTypes.objectOf(PropTypes.string),
    variant: PropTypes.string,
    children: PropTypes.node.isRequired,
};

Wrapper.defaultProps = {
    style: {},
    variant: 'blank',
};

export default Wrapper;
