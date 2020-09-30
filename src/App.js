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
      userIncome: '',
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmploymentChange = this.onEmploymentChange.bind(this)
    this.onIncomeChange = this.onIncomeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  onNameChange (event) {
    this.setState({userName: this.capitalizeFirstLetter(event.target.value)})
  }

  onEmploymentChange (event) {
    this.setState({userEmployment: event.target.value.toLowerCase()})
  }

  onIncomeChange (event) {
    if (parseInt(event.target.value)>=16000) {
      this.setState({userIncome: "minimum income"})
    } else {
      this.setState({userIncome: "low income"})
    }
  }

  onSubmit() {
    this.setState({userName: this.state.userName})
    this.setState({userEmployment: this.state.userEmployment})
    this.setState({userIncome: this.state.userIncome})
  }

  render() {
    const { userCards, userEmployment, userIncome } = this.state
    const filteredCards = cards.filter(card => {
      return (card.availability.includes("anyone") || card.availability.includes(userEmployment) || card.availability.includes(userIncome))
    })

    return(
      <div>
        <p>Hello, world</p>
        <UserForm onNameChange={this.onNameChange} onSubmit={this.onSubmit} onEmploymentChange={this.onEmploymentChange} onIncomeChange={this.onIncomeChange}/>
        <CardsList filteredcards = {filteredCards}/>
      </div>
    )
  }
}

export default hot(module)(App);