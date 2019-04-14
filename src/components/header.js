import React from "react";
import styled from "@emotion/styled";
import Icon from "~components/icon";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing);
`;

export default ({ children }) => (
  <Wrapper>
    <Header>
      {children}
      <Icon href="#about" label="About this Site" icon="info" />
    </Header>
  </Wrapper>
);
