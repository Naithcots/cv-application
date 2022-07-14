import React, { Component } from "react";
import styles from "../styles/Header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h2 className={styles.title}>CV Project</h2>
      </header>
    );
  }
}

export default Header;
