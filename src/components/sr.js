import React from "react";
import styled from "@emotion/styled";

const SR = styled.span`
  position: absolute;
  left: -10vw;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`;

export default ({ children, ...other }) => <SR {...other}>{children}</SR>;
