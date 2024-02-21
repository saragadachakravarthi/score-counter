import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count1: 0, count:0}
  mangoCount = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1}
      
    })
  }
  bananaCount = () => {
    this.setState(prevState => {
      return {count1: prevState.count1 + 1}
    })
  }
  render() {
    const {count} = this.state
    const {count1} = this.state

    return (
      <div className="container">
        <h1 className="heading">
          Chakri ate {count} Mangoes {count1} Bananas
        </h1>
        <div className="fruits-container">
          <div className="mango-container">
            <img
              src="https://img.freepik.com/free-vector/vector-ripe-yellow-orange-red-whole-sliced-mango-cubes-with-leaf-isolated-white-background_1284-45465.jpg" 
              alt="mango"
              className="fruitpic"
            />
            <button className="buttonm" onClick={this.mangoCount}>
              Eat Mango
            </button>
          </div>

          <div className="banana-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="fruitpic"
            />
            <button className="buttonb" onClick={this.bananaCount}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
