import React, { Component } from "react";
import styles from "../styles/Field.module.css";
import Input from "./Input";

class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editOpen: false,
    };

    this.toggleEditOpen = this.toggleEditOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleEditOpen() {
    this.setState({
      editOpen: this.state.editOpen ? false : true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fields = e.target;
    if (this.props.education) {
      this.props.edit(
        this.props.education.id,
        fields.schoolname.value,
        fields.level.value,
        fields.subject.value,
        fields.startdate.value,
        fields.enddate.value
      );
    } else if (this.props.work) {
      this.props.edit(
        this.props.work.id,
        fields.companyname.value,
        fields.position.value,
        fields.description.value,
        fields.startdate.value,
        fields.enddate.value
      );
    }

    this.setState({
      editOpen: false,
    });
  }

  render() {
    const { name, education, work, fields, remove } = this.props;
    const { editOpen } = this.state;

    return (
      <>
        <div className={styles.field}>
          <span>{name}</span>
          <div>
            <button
              className={styles["button-edit"]}
              onClick={this.toggleEditOpen}
            >
              Edit
            </button>
            {education && (
              <button
                className={styles["button-remove"]}
                onClick={() => remove(education.id)}
              >
                Remove
              </button>
            )}
            {work && (
              <button
                className={styles["button-remove"]}
                onClick={() => remove(work.id)}
              >
                Remove
              </button>
            )}
          </div>
        </div>

        {editOpen && (
          <form onSubmit={this.handleSubmit}>
            {fields.map((e, idx) => (
              <Input
                label={e.label}
                type={e.type}
                education={education}
                work={work}
                key={idx}
              />
            ))}
            <button>Confirm</button>
          </form>
        )}
      </>
    );
  }
}

export default Field;
