import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: ${({ variant, theme }) => theme.size[variant]};
  font-weight: 700;
`;

export default StyledTitle;
