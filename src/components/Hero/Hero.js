import React from "react";
import styles from "./Hero.module.css";
import img from "./mockup.png";
const Hero = () => {
  return (
    <section>
      <div className={styles.heroSect}>
        <div className="">
          <div className="container">
            <div className={styles.heroWrapper}>
              <div className={styles.heroLeftContent}>
                <div className={styles.heroLeftContentWrap}>
                  <h2>Dont waste your time and money</h2>
                  <p>
                    Take a strategic, 5 week approach to becoming a remote
                    software developer
                  </p>
                  <a href="/" className="globalbtn">
                    Enroll Now
                  </a>
                </div>
              </div>
              <div className={styles.heroRightContent}>
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
