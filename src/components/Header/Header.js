import React from "react";

import { Link } from "react-router-dom";

import styles from "../Header/Header.module.css";

const Header = () => {
  return (
    <div className={styles.main}>
      <div className={styles.text_container}>
        <h1 className={styles.title}>Gone</h1>
        <p className={styles.subtitle}>
          Seu sistema para gestão de achados e perdidos.
        </p>
        <Link className={styles.login_link} to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
