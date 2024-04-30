// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}
  onApplyBreak = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speed-img"
          alt="Speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="speed-limit">Min limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            type="button"
            className="Acc-Button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="Apply-button"
            onClick={this.onApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
