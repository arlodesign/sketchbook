import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styles from "./link.module.css";

export default ({ to, href, children }) =>
  to ? (
    <GatsbyLink className={styles.link} to={to}>
      {children}
    </GatsbyLink>
  ) : (
    <a className={styles.link} href={href}>
      {children}
    </a>
  );
