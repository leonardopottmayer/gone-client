import React from "react";

import { Link } from "react-router-dom";

import styles from "./LoginPage.module.css";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const LoginPage = () => {
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.form_container}>
          <form>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <Form.Control
                placeholder="E-Mail"
                name="email"
                required
                aria-label="E-Mail"
                aria-describedby="emailinput"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
              <Form.Control
                placeholder="Senha"
                name="password"
                required
                type="password"
                aria-label="Senha"
                aria-describedby="passwordinput"
              />
            </InputGroup>
            <Link className={styles.home_link} to="/">
              Home
            </Link>
            <input
              className={styles.button_input}
              type="submit"
              value="Entrar"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
