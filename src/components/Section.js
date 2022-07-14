import React, { Component } from "react";
import styles from "../styles/Section.module.css";
import Input from "./Input";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputOpen: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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
            {education && (
              <>
                {education.map((e, idx) => (
                  <div key={idx}>
                    {e.schoolName}
                    <button>Edit</button>
                    <button onClick={() => removeEducation(e.id)}>
                      Remove
                    </button>
                  </div>
                ))}
              </>
            )}
            {work && (
              <>
                {work.map((e, idx) => (
                  <div key={idx}>
                    {e.companyName}
                    <button>Edit</button>
                    <button onClick={() => removeWork(e.id)}>Remove</button>
                  </div>
                ))}
              </>
            )}

            <div className={styles.buttons}>
              <button
                className={styles["button-add"]}
                onClick={() => this.setState({ inputOpen: true })}
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
