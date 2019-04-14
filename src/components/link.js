import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

const styles = css`
  display: inline-block;
  position: relative;
  color: var(--white);
  text-decoration: none;
  background-image: linear-gradient(
    to bottom,
    transparent 1.25rem,
    var(--white) calc(1.25rem + 1px),
    transparent calc(1.25rem + 1.5px)
  );
`;

export default ({ to, href, children }) =>
  to ? (
    <Link css={styles} to={to}>
      {children}
    </Link>
  ) : (
    <a css={styles} href={href}>
      {children}
    </a>
  );
