import React, { Component } from "react";
import Input from "./Input";

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { fields, name } = this.props;

    return (
      <section>
        <h2>{name}</h2>
        {fields.map((field, idx) => (
          <Input
            label={field.label}
            type={field.type ? field.type : "text"}
            key={idx}
          />
        ))}
      </section>
    );
  }
}

export default Section;
