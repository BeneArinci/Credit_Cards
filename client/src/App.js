import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import CardsList from "./CardsList/CardsList"
import UserForm from "./UserForm/UserForm"
import capitalize from "./functions"


class App extends React.Component {
  constructor(){
    super()
    this.state = {
      userName: '',
      userEmployment: '',
      userIncome: '',
      apiData: null,
      filteredCards: null
    }
    this.onNameChange = this.onNameChange.bind(this)
    this.onEmploymentChange = this.onEmploymentChange.bind(this)
    this.onIncomeChange = this.onIncomeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount () {
    fetch("http://localhost:5000/cardslist")
    .then((res) => {
      // console.log(res.json())
      return res.json()
    })
    .then((data) => {
      console.log(data)
      this.setState({apiData: data})})
  }

  onNameChange (event) {
    this.setState({userName: capitalize(event.target.value)})
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
    this.filteringCards(this.state.apiData)
  }

  filteringCards(cards) {
    const { userEmployment, userIncome } = this.state
    const filteredCards = cards.filter(card => {
      return (card.availability.includes("anyone") || card.availability.includes(userEmployment) || card.availability.includes(userIncome))
    })
    this.setState({filteredCards: filteredCards})
  }

  render() {
    console.log(this.state.apiData)
    return(
      <Router>
        <Switch>
          <Route path='/' exact render={props =>
            <UserForm onNameChange={this.onNameChange} onSubmit={this.onSubmit} onEmploymentChange={this.onEmploymentChange} onIncomeChange={this.onIncomeChange}/>
          } />
          <Route exact path='/cards' render={props =>
            <CardsList filteredcards = {this.state.filteredCards} userName = {this.state.userName}/>
          } />
        </Switch>
      </Router>
    )
  }
}

export default hot(module)(App);