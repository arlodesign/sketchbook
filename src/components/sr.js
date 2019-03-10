import React from "react";
import styles from "./sr.module.css";

export default ({ children }) => <span className={styles.sr}>{children}</span>;
