import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  gap: var(--space-md);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: var(--space-lg);
  list-style: none;
`;

export default StyledList;
