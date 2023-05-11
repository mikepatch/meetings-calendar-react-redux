import styled from "styled-components";

const StyledFieldLabel = styled.label`
  align-items: ${({ align, theme }) => theme.position[align]};
  display: flex;
  flex-direction: ${({ variant }) => variant};
  gap: var(--space-sm);
  justify-content: ${({ justify, theme }) => theme.position[justify]};
`;

export default StyledFieldLabel;
