import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import CardsList from "./CardsList/CardsList"
import UserForm from "./UserForm/UserForm"
import cards from "./cards"
import "tachyons"

class App extends React.Component {

  onNameChange (event) {
    console.log(event.target.value)
  }

  onEmploymentChange (event) {
    console.log('dropdown', event.target.value)
  }

  onIncomeChange (event) {
    console.log("income", event.target.value)
  }

  onSubmit() {
    console.log("submit")
  }

  render() {
    return(
      <div>
        <p>Hello, world</p>
        <UserForm onNameChange={this.onNameChange} onSubmit={this.onSubmit} onEmploymentChange={this.onEmploymentChange} onIncomeChange={this.onIncomeChange}/>
        <CardsList filteredcards = {cards}/>
      </div>
    )
  }
}

export default hot(module)(App);