import React, { Component } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Preview from "./components/Preview";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Form />
          <Preview />
        </main>
      </>
    );
  }
}

export default App;
