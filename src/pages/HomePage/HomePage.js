import React from "react";

import Header from "../../components/Header/Header";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import Credits from "../../components/Credits/Credits";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.main}>
      <Header />
      <ItemsTable />
      <Credits />
    </div>
  );
};

export default HomePage;
