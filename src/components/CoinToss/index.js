// Write your code here
import {Component} from 'react'

import './index.css'

const imageUrlHeads = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const imageUrlTails = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {imageUrl: imageUrlHeads, total: 0, heads: 0, tails: 0}

  onClickedButton = () => {
    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult) {
      // tails
      this.setState(prevState => ({
        imageUrl: imageUrlTails,
        total: prevState.total + 1,
        tails: prevState.tails + 1,
      }))
    } else {
      // heads

      this.setState(prevState => ({
        imageUrl: imageUrlHeads,
        total: prevState.total + 1,
        heads: prevState.heads + 1,
      }))
    }
  }

  render() {
    const {imageUrl, total, heads, tails} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para-head">Heads (or) Tails</p>
          <img className="image" src={imageUrl} alt="toss result" />
          <div className="button-container">
            <button
              type="button"
              className="button-class"
              onClick={this.onClickedButton}
            >
              Toss coin
            </button>
          </div>
          <div className="count-container">
            <p className="para">Total: {total}</p>
            <p className="para">Heads: {heads}</p>
            <p className="para">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
