import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'

export default class Home extends React.Component {
  state = {
    strings: ''
  }

  handleInputChange = event => {
    let s = [...this.state.strings]
    s.push(event.target.value)
    this.setState({
      strings: s,
    })
  }

  render() {
    let sketch = '';
    if (this.state.strings){
      sketch = <P5Sketch strings={this.state.strings}></P5Sketch>;
    } else {
      sketch = ''
    }
    return (
      <div>
        <h1>Sketches</h1>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <form>
          <input type="text" onChange={this.handleInputChange}></input>
        </form>
        {/* <P5Sketch strings={this.state.strings}></P5Sketch> */}
        {sketch}
        
        
      </div>
    )
  }
}
