import React, { Component } from "react";
import styles from "../styles/Input.module.css";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { label, type, setGeneralField, education, work } = this.props;
    const forStr = label.replace(" ", "").toLowerCase();

    if (setGeneralField)
      return (
        <div className={styles.input}>
          <label htmlFor={forStr} className={styles.label}>
            {label}
          </label>
          <input
            type={type}
            id={forStr}
            onChange={(e) => setGeneralField(forStr, e.target.value)}
            required
          />
        </div>
      );

    return (
      <div className={styles.input}>
        <label htmlFor={forStr} className={styles.label}>
          {label}
        </label>
        {!education && !work && <input type={type} id={forStr} required />}
        {education && (
          <input
            type={type}
            id={forStr}
            defaultValue={education[forStr]}
            required
          />
        )}
        {work && (
          <input type={type} id={forStr} defaultValue={work[forStr]} required />
        )}
      </div>
    );
  }
}

export default Input;
