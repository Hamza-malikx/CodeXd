import React from "react";
import styles from "./Program.module.css";
import img from "./camp.png";
import Tilt from "react-parallax-tilt";

const Program = () => {
  return (
    <section className={styles.programSect}>
      <div className={styles.progVector5bg}>
        <div className={styles.progVectorbg}>
          <Tilt>
            <div className="container">
              <div className={styles.programWrapper}>
                <div className={styles.programLeftContent}>
                  <h2>By The End of The Program, You'll Be...</h2>
                  <ul>
                    <li>
                      A proficient web developer who has coded projects in HTML,
                      CSS and JavaScript, and understands Requests, JSON, APIs,
                      AJAX, DOM and more!
                    </li>
                    <li>
                      An "expert" capable of setting up and migrating eCommerce
                      stores -- a service worth $1,000 - $10,000+ on the
                      fastest-growing eCommerce platform: Shopify
                    </li>
                    <li>
                      A real eCommerce developer who has built OVER $1,000 of
                      REAL WORLD tasks taken directly from freelancing sites
                    </li>
                    <li>
                      The owner of an impressive eCommerce developer portfolio
                      that converts clients, and the ability to send proposals
                      that WIN paid jobs
                    </li>
                    <li>
                      A real freelancer able to contract, onboard, communicate,
                      and deliver services with the help of step-by-step
                      checklists and templates
                    </li>
                  </ul>
                </div>
                <div className={styles.programRightContent}>
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default Program;
