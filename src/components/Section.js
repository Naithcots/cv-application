import React, { Component } from "react";
import styles from "../styles/Section.module.css";
import Field from "./Field";
import Input from "./Input";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputOpen: false,
    };

    this.toggleInputOpen = this.toggleInputOpen.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  toggleInputOpen() {
    this.setState({
      inputOpen: this.state.inputOpen ? false : true,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.addEducation !== undefined) {
      const fields = e.target;
      this.props.addEducation(
        fields.schoolname.value,
        fields.level.value,
        fields.subject.value,
        fields.startdate.value,
        fields.enddate.value
      );
    }
    if (this.props.addWork !== undefined) {
      const fields = e.target;
      this.props.addWork(
        fields.companyname.value,
        fields.position.value,
        fields.description.value,
        fields.startdate.value,
        fields.enddate.value
      );
    }
    this.setState({
      inputOpen: false,
    });
  }

  handleEdit(e) {
    e.preventDefault();
  }

  render() {
    const {
      fields,
      name,
      expandable,
      setGeneralField,
      education,
      work,
      removeEducation,
      removeWork,
      editEducation,
      editWork,
    } = this.props;

    const { inputOpen } = this.state;

    return (
      <section>
        <h2>{name}</h2>

        {!expandable &&
          setGeneralField &&
          fields.map((field, idx) => (
            <Input
              label={field.label}
              type={field.type ? field.type : "text"}
              key={idx}
              setGeneralField={setGeneralField}
            />
          ))}

        {expandable && (
          <>
            {education &&
              education.map((e) => (
                <Field
                  name={e.schoolname}
                  fields={fields}
                  education={e}
                  remove={removeEducation}
                  edit={editEducation}
                  key={"e" + e.id}
                />
              ))}

            {work &&
              work.map((e) => (
                <Field
                  name={e.companyname}
                  fields={fields}
                  work={e}
                  remove={removeWork}
                  edit={editWork}
                  key={"w" + e.id}
                />
              ))}

            <div className={styles.buttons}>
              <button
                className={styles["button-add"]}
                onClick={this.toggleInputOpen}
              >
                New
              </button>
            </div>

            {inputOpen && (
              <form onSubmit={this.handleSubmit}>
                {fields.map((field, idx) => (
                  <Input
                    label={field.label}
                    type={field.type ? field.type : "text"}
                    key={idx}
                  />
                ))}
                <button type="submit" className={styles["button-submit"]}>
                  Submit
                </button>
              </form>
            )}
          </>
        )}
      </section>
    );
  }
}

export default Section;
