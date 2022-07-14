import React, { Component } from "react";
import Forms from "./components/Forms";
import Header from "./components/Header";
import Preview from "./components/Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      general: {
        firstname: "",
        lastname: "",
        emailaddress: "",
        phonenumber: "",
      },
      education: [],
      work: [],
    };

    this.setGeneralField = this.setGeneralField.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.addWork = this.addWork.bind(this);
    this.removeEducation = this.removeEducation.bind(this);
    this.removeWork = this.removeWork.bind(this);
  }

  setGeneralField(name, value) {
    this.setState({
      general: {
        ...this.state.general,
        [name]: value,
      },
    });
  }

  addEducation(schoolName, level, subject, startDate, endDate) {
    const id = this.state.education.length;
    const education = { id, schoolName, level, subject, startDate, endDate };
    this.setState({
      education: [...this.state.education, education],
    });
  }

  addWork(companyName, position, description, startDate, endDate) {
    const id = this.state.work.length;
    const work = { id, companyName, position, description, startDate, endDate };
    this.setState({
      work: [...this.state.work, work],
    });
  }

  removeEducation(id) {
    this.setState({
      education: this.state.education.filter((e) => e.id !== id),
    });
  }

  removeWork(id) {
    this.setState({
      work: this.state.work.filter((e) => e.id !== id),
    });
  }

  render() {
    const { general, education, work } = this.state;

    return (
      <>
        <Header />
        <main>
          <Forms
            general={general}
            education={education}
            work={work}
            setGeneralField={this.setGeneralField}
            addEducation={this.addEducation}
            addWork={this.addWork}
            removeEducation={this.removeEducation}
            removeWork={this.removeWork}
          />
          <Preview />
        </main>
      </>
    );
  }
}

export default App;
