import React from "react";

import styles from "./Card.module.css";

const Card = (props) => {
  return <div className={`row ${styles.m_t35}`}>{props.children}</div>;
};

export default Card;
