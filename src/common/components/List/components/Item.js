import React from "react";
import PropTypes from "prop-types";

import StyledItem from "../styled/Item.styled";

function Item({ children }) {
  return <StyledItem>{children}</StyledItem>;
}

Item.propTypes = {
  children: PropTypes.node,
};

Item.defaultProps = {
  children: null,
};

export default Item;
