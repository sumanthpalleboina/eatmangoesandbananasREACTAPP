import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  clickedEatMango = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  clickedEatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="app-container">
        <div className="fruits-section">
          <h1 className="counter-heading">
            Bob ate <span className="mango-count">{mango}</span> mangoes{' '}
            <span className="banana-count">{banana}</span> bananas
          </h1>
          <div className="cards-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-pic"
              />
              <button
                className="button1"
                type="button"
                onClick={this.clickedEatMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="mango-pic"
              />
              <button
                className="button1"
                type="button"
                onClick={this.clickedEatBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
