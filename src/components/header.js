import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Icon from "~components/icon";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 2rem 1fr 2rem 1fr;
  grid-template-areas: "a b c d e";
  grid-column-gap: var(--spacing);
  padding: var(--spacing);
`;

export default ({ children }) => (
  <Wrapper>
    <Header>
      {children}
      <span
        css={css`
          grid-area: e;
          justify-self: end;
        `}
      >
        <Icon href="#about" label="About this Site" icon="info" />
      </span>
    </Header>
  </Wrapper>
);
