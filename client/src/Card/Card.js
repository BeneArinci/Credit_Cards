import React from "react";
import "./Card.css"

class Card extends React.Component {
  constructor(props){
    super()
    this.state = {
      selected: false
    }
    this.selectDeselectCard = this.selectDeselectCard.bind(this)
  }

  selectDeselectCard() {
    const {cardinfo} = this.props
    if (this.state.selected === false) {
      this.props.addCredit(cardinfo.credit_available)
      this.setState({selected: !this.state.selected})
      console.log("selected")
    } else {
      this.props.removeCredit(cardinfo.credit_available)
      this.setState({selected: !this.state.selected})
      console.log("deselected")
    }

  }
 
  render(){
    const {cardinfo} = this.props
    const {selected} = this.state
    return (
      <article className={selected ? "selected-card center mw5 mw6-ns br3 hidden ba bw1 shadow-1 b--green mv4" : "card grow shadow-4 pointer center mw5 mw6-ns br3 hidden ba b--black-10 mv4"}
      data-testid = "single-card"
      onClick={() => this.selectDeselectCard()}>
        <h1 className="f3 bg-near-white br3 br--top orange mv0 pv2 ph3">{cardinfo.name}</h1>
        <div className="info-list bg-washed-green pa3 br3 b--black-10">
          <div className="f6 f4-ns lh-copy measure">
            Apr: <span testid="apr">{cardinfo.apr}</span>
          </div>
          <div className="f6 f4-ns lh-copy measure">
            Balance Transfer Offer Duration: <span testid="btod">{cardinfo.balance_transfer_offer_duration}</span>
          </div>
          <div className="f6 f4-ns lh-copy measure">
            Purchase Offer Duration: <span testid="pod">{cardinfo.purchase_offer_duration}</span>
          </div>
          <div className="f6 f4-ns lh-copy measure">
            Credit Available: <span>£</span><span testid="credit">{cardinfo.credit_available}</span>
          </div>
        </div>
      </article>
    )
  }
  
}


export default Card