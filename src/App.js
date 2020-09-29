import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Card from "./Card/Card"
import cards from "./cards"
import 'tachyons'

class App extends React.Component {
  render() {
    console.log(cards)
    return(
      <div>
        <p>Hello, world</p>
        <Card cardinfo = {cards[0]}/>
      </div>
    )
  }
}

export default hot(module)(App);