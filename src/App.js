import React from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import CardsList from "./CardsList/CardsList"
import UserForm from "./UserForm/UserForm"
import cards from "./cards"
import "tachyons"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName: '',
      userEmployment: '',
      userIncome: ''
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmploymentChange = this.onEmploymentChange.bind(this)
    this.onIncomeChange = this.onIncomeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onNameChange (event) {
    this.setState({userName: event.target.value})
  }

  onEmploymentChange (event) {
    this.setState({userEmployment: event.target.value})
  }

  onIncomeChange (event) {
    this.setState({userIncome: event.target.value})
  }

  onSubmit() {
    this.setState({userName: this.state.userName})
    this.setState({userEmployment: this.state.userEmployment})
    this.setState({userIncome: this.state.userIncome})
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