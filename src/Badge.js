import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  padding: 8px;
  background-color: blueviolet;
  display: inline-flex;
  margin-right: 16px;

  border-radius: 16px;
`;

const Badge = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

export default Badge;
