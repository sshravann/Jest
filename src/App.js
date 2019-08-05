import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

const tempArr = [
  {
    fName: "Shravan",
    lName: "Chittem",
    email: "sshravann@gmail.com",
    age: 30,
    onlineStatus: true
  }
];

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            description="Click the button to render posts."
            tempArr={tempArr}
          />
        </section>
      </div>
    );
  }
}

export default App;
