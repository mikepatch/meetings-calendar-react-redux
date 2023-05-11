/* eslint-disable no-console */
import styled from 'styled-components';

export const StyledFormField = styled.fieldset`
    align-items: ${({ align, theme }) => theme.position[align]};
    display: flex;
    flex-direction: ${({ variant }) => variant};
    flex-wrap: wrap;
    gap: var(--space-sm);
    justify-content: ${({ justify, theme }) => theme.position[justify]};
`;

export const StyledLegend = styled.legend`
    margin-bottom: var(--space-sm);
`;