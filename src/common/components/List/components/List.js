import React from "react";
import PropTypes from "prop-types";

import StyledList from "../styled/List.styled";
import Item from "./Item";

function List({ children }) {
  return <StyledList>{children}</StyledList>;
}

List.propTypes = {
  children: PropTypes.node,
};

List.defaultProps = {
  children: null,
};

export default Object.assign(List, { Item });
