import React, { Component } from "react";
import Section from "./Section";

const general = [
  { label: "First Name" },
  { label: "Last Name" },
  { label: "Email Address", type: "email" },
  { label: "Phone Number", type: "tel" },
];

const education = [
  { label: "School Name" },
  { label: "Level" },
  { label: "Subject" },
  { label: "Start Date", type: "date" },
  { label: "End Date", type: "date" },
];

const work = [
  { label: "Company Name" },
  { label: "Position" },
  { label: "Description" },
  { label: "Start Date", type: "date" },
  { label: "End Date", type: "date" },
];

class Form extends Component {
  render() {
    return (
      <form>
        <Section fields={general} name="General" />
        <Section fields={education} name="Education" expandable={true} />
        <Section fields={work} name="Work Experience" expandable={true} />
      </form>
    );
  }
}

export default Form;
