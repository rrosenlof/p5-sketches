import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: ['1', '2', '3', '4'],
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    let s = [...this.state.strings];
    s.push("j"); // Adding a test char to array of strings...
    this.setState({
      strings: s,
    });
  }

  render() {
    return (
      <div>
        <h1>Sketches</h1>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <button onClick={this.handleInputChange}>
          Add char
        </button>
        {this.state.strings}
        <P5Sketch strings={this.state.strings}></P5Sketch>
      </div>
    )
  }
}
