import React, { Component } from "react";
import Header from "./components/header";
import Headline from "./components/headline";
import "./app.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section className="main">
          <Headline
            header="Posts"
            description="Click the button to render posts."
          />
        </section>
      </div>
    );
  }
}

export default App;
