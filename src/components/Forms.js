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
      general,
      education,
      work,
      setGeneralField,
      addEducation,
      addWork,
      removeEducation,
      removeWork,
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
          addEducation={addEducation}
          removeEducation={removeEducation}
          name="Education"
          expandable={true}
          education={education}
        />
        <Section
          fields={workFields}
          addWork={addWork}
          removeWork={removeWork}
          name="Work Experience"
          expandable={true}
          work={work}
        />
      </div>
    );
  }
}

export default Forms;
