import styled, { css } from 'styled-components';

const StyledWrapper = styled.div`
    ${({ variant }) =>
        variant === 'neumorphic' &&
        css`
            border-radius: var(--radius-lg);
            box-shadow: var(--box-shadow-convex);
            padding: var(--space-lg);
            transition: var(--transition);
        `}
`;

export default StyledWrapper;
