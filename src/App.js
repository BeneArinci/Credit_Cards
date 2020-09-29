import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends React.Component {
  render() {
    return(
      <div>
        <p>Hello, world</p>
      </div>
    )
  }
}

export default hot(module)(App);