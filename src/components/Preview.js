import React, { Component } from "react";
// import styles from "../styles/Preview.module.css";
import "../styles/preview/simple.css";

class Preview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style: "simple",
    };
  }

  render() {
    const { general, education, work } = this.props;
    const { style } = this.state;
    console.log({ general, education, work });

    return (
      <div className={"preview " + style}>
        <section className="general">
          <div className="name">
            <p className="firstname">{general.firstname}</p>
            <p className="lastname">{general.lastname}</p>
          </div>
          <div className="info">
            <div>
              <p className="phone-label">Phone:</p>
              <p className="phone">{general.phonenumber}</p>
            </div>
            <div>
              <p className="email-label">Email:</p>
              <p className="email">{general.emailaddress}</p>
            </div>
          </div>
        </section>
        <section className="work">
          <h2 className="title">Experience</h2>
          <div className="fields">
            {work.map((company) => (
              <div className="school" key={company.id}>
                <div className="date">
                  <p className="startdate">{company.startdate} - </p>
                  <p className="enddate">{company.enddate}</p>
                </div>
                <div className="details">
                  <p className="name">{company.companyname}</p>
                  <p className="position">{company.position}</p>
                  <p className="description">{company.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="education">
          <h2 className="title">Education</h2>
          <div className="fields">
            {education.map((school) => (
              <div className="school" key={school.id}>
                <div className="date">
                  <p className="startdate">{school.startdate} - </p>
                  <p className="enddate">{school.enddate}</p>
                </div>
                <div className="details">
                  <p className="name">{school.schoolname}</p>
                  <p className="level">{school.level}</p>
                  <p className="subject">{school.subject}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }
}

export default Preview;
