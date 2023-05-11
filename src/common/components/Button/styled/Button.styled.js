/* eslint-disable indent */
import styled, { css } from 'styled-components';

const blankButton = css`
    appearance: none;
    border: none;
    cursor: pointer;
    padding: 0;
`;

const neumorphicButton = css`
    align-items: center;
    border: none;
    border-radius: var(--radius-lg);
    box-shadow: var(--box-shadow-convex);
    color: var(--color-text);
    cursor: pointer;
    display: flex;
    font-weight: 700;
    justify-content: center;
    min-height: var(--min-tap-target-height);
    padding: 0 var(--space-lg);
    position: relative;
    transition: var(--transition);

    &:hover {
        box-shadow: var(--box-shadow-flat);
    }

    &:active {
        box-shadow: var(--box-shadow-concave);
    }
`;

const dropdownIcon = css`
    ::before {
        border: solid var(--color-text);
        border-width: 0 2px 2px 0;
        content: '';
        display: inline-block;
        padding: 3px;
        position: absolute;
        right: 1rem;
        top: 50%;
        transition: var(--transition);
        transform: ${({ isOpen }) =>
            isOpen ? 'translateY(-50%) rotate(-135deg)' : 'translateY(-50%) rotate(45deg)'};
    }
`;

const StyledButton = styled.button`
    ${({ variant }) =>
        variant === 'blank' &&
        css`
            ${blankButton}
        `}
    ${({ variant }) =>
        variant === 'styled' &&
        css`
            ${neumorphicButton}
        `}
    ${({ variant }) =>
        variant === 'dropdown' &&
        css`
            ${neumorphicButton}
            justify-content: flex-start;
            margin: var(--space-sm) 0;
            padding: 0 var(--space-md);

            ${dropdownIcon}
        `}
`;

export default StyledButton;
