import styled from 'styled-components';

const StyledTextInput = styled.input`
    color: var(--color-text);
    background-color: var(--color-background);
    border: none;
    border-radius: var(--radius-lg);
    box-shadow: var(--box-shadow-concave);
    font-weight: 700;
    min-height: var(--min-tap-target-height);
    text-align: center;
    transition: var(--transition);
    width: 100%;

    ::placeholder {
        color: var(--color-text-light);
    }

    :focus-visible {
        box-shadow: var(--box-shadow-convex);
        outline: none;
    }
`;

export default StyledTextInput;
