import './index.css'
import {Component} from 'react'

class RandomNumber extends Component {
  state={randomNumber:0}
  randomPick = () => {
     this.setState({
      randomNumber: (Math.floor(Math.random()*101))
     })
  }
  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the
            <br /> range of 0 to 100
          </p>
          <button onClick={this.randomPick} className="but">Generate</button>
          <p className="rand">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumber
