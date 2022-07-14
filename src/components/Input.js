import React, { Component } from "react";
import styles from "../styles/Input.module.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type } = this.props;
    const forStr = label.replace(" ", "").toLowerCase();

    return (
      <div>
        <label htmlFor={forStr} className={styles.label}>
          {label}
        </label>
        <input type={type} id={forStr} />
      </div>
    );
  }
}

export default Input;
