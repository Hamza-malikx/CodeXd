import React from "react";
import styles from "./AccessCard.module.css";
const AccessCard = (props) => {
  return (
    <div className={styles.AccessCard}>
      <img src={props.img} alt="" />
      <h3>100+ Coding Videos</h3>
      <p>
        As real developers with 7+ years of experience (not just teachers...)
      </p>
      <p>
        We know There's a difference between THEORETICAL and REAL WORLD
        programming.
      </p>
    </div>
  );
};

export default AccessCard;
