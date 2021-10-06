import React from "react";
import styles from "./Access.module.css";
import img1 from "../../images/Component 2.png";
import img2 from "../../images/Component 3.png";
import AccessCard from "../AccessCard/AccessCard";

const Access = () => {
  return (
    <section className={styles.AccessSect}>
      <div className="container">
        <div className={styles.AccessContent}>
          <h2>When You Join, You'll Get Full, Immediate Access To:</h2>
          <div className={styles.AccessCardWrapper}>
            <AccessCard img={img1} />
            <AccessCard img={img2} />
            <AccessCard img={img1} />
            <AccessCard img={img2} />
            <AccessCard img={img1} />
            <AccessCard img={img2} />
          </div>
          <div className={styles.AccessEnroll}>
            <h3>Join and get full and immediate access to the entire course</h3>
            <a
              style={{ left: "0px", top: "20px" }}
              className="globalbtn"
              href="/"
            >
              Enroll now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
