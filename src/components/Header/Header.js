import React, { useState } from "react";
import styles from "./Header.module.css";
const Header = () => {
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  return (
    <div className={styles.header}>
      <div className="container">
        <nav className={styles.headerWrapper}>
          <div className={styles.logo}>
            <img src="/images/Quick Logo.png" alt="" />
          </div>
          <div className={styles.navbar}>
            <ul className={styles.navbar_nav}>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Overview
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Landing
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Pages
                </a>
              </li>
              <li className={styles.navItems}>
                <a className={styles.navLink} href="/">
                  Docs
                </a>
              </li>
              <li>
                <label
                  className={
                    hamburger === "false"
                      ? `${styles.humbergButton}`
                      : `${styles.humbergButton}`
                  }
                  onClick={clickHandler}
                >
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.topbar}`
                        : `${styles.topbarab}`
                    }
                  ></span>
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.middlebar}`
                        : `${styles.middlebarab}`
                    }
                  ></span>
                  <span
                    className={
                      hamburger === "false"
                        ? `${styles.bottombar}`
                        : `${styles.bottombarab}`
                    }
                  ></span>
                </label>
              </li>
            </ul>
            {hamburger === "true" ? (
              <div className={styles.wrapper}>
                <div className={styles.wrapperItems}>
                  <a href="/">Overview</a>
                  <a href="/">Landing</a>
                  <a href="/">Pages</a>
                  <a href="/">Docs</a>
                </div>
              </div>
            ) : (
              <div className={styles.wrapperab}>
                <div className={styles.wrapperItems}>
                  <a href="/">Overview</a>
                  <a href="/">Landing</a>
                  <a href="/">Pages</a>
                  <a href="/">Docs</a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
