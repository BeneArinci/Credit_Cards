import React from "react";
import Card from "../Card/Card";
import SelectedCredit from "../SelectedCredit/SelectedCredit";

class CardsList extends React.Component{
  constructor () {
    super()
    this.state = {
      selectedCredit: 0
    }
    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.handleCardDeselection = this.handleCardDeselection.bind(this)
  }

  handleCardSelection (credit) {
    this.setState({selectedCredit: this.state.selectedCredit + credit})
  }

  handleCardDeselection (credit) {
    this.setState({selectedCredit: this.state.selectedCredit - credit})
  }
 
  render() {
    console.log(this.props.filteredcards)
    return (
      <div>
        <div className="flex flex-wrap">
          {
            this.props.filteredcards.map((card, index) => {
              return <Card key = {index} cardinfo = {card} addCredit={this.handleCardSelection} removeCredit = {this.handleCardDeselection}/>
            })
          }
        </div>
        <SelectedCredit credit = {this.state.selectedCredit}/>
      </div>
    );
  }
  
}

export default CardsList