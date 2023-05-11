import React from "react";
import PropTypes from "prop-types";

import StyledItem from "../styled/Item.styled";
import Wrapper from "../../Wrapper";

function Item({ children }) {
  return (
    <Wrapper style={wrapperStyle} variant="neumorphic">
      <StyledItem>{children}</StyledItem>
    </Wrapper>
  );
}

Item.propTypes = {
  children: PropTypes.node,
};

Item.defaultProps = {
  children: null,
};

const wrapperStyle = {
  padding: "var(--space-lg)",
};

export default Item;
