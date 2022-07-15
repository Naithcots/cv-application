import React, { Component } from "react";
import Section from "./Section";

const generalFields = [
  { label: "First Name" },
  { label: "Last Name" },
  { label: "Email Address", type: "email" },
  { label: "Phone Number", type: "tel" },
];

const educationFields = [
  { label: "School Name" },
  { label: "Level" },
  { label: "Subject" },
  { label: "Start Date", type: "date" },
  { label: "End Date", type: "date" },
];

const workFields = [
  { label: "Company Name" },
  { label: "Position" },
  { label: "Description" },
  { label: "Start Date", type: "date" },
  { label: "End Date", type: "date" },
];

class Forms extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      education,
      work,
      setGeneralField,
      addEducation,
      addWork,
      removeEducation,
      removeWork,
      editEducation,
      editWork,
    } = this.props;

    return (
      <div>
        <Section
          fields={generalFields}
          setGeneralField={setGeneralField}
          name="General"
        />
        <Section
          fields={educationFields}
          education={education}
          addEducation={addEducation}
          removeEducation={removeEducation}
          editEducation={editEducation}
          name="Education"
          expandable={true}
        />
        <Section
          fields={workFields}
          work={work}
          addWork={addWork}
          removeWork={removeWork}
          editWork={editWork}
          name="Work Experience"
          expandable={true}
        />
      </div>
    );
  }
}

export default Forms;
