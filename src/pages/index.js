import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'
import { EMOJIS } from '../../static/constants.js'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: [],
      disable: false
    }

    this.addChar = this.addChar.bind(this);
    this.removeChar = this.removeChar.bind(this);
  }

  addChar() {
    let s = [...this.state.strings];
    let added = false;
    let char = ''
    while (!added && s.length < EMOJIS.length) {
      char = EMOJIS[Math.floor(Math.random()*EMOJIS.length)]
      if (s.indexOf(char) === -1) {
        added = !added;
      } 
    }

    if (s.length == EMOJIS.length) {
      this.setState({
        disable: true
      })
    }
    
    s.push(char); // Adding a test char to array of strings...
    this.setState({
      strings: s,
    });
  }

  removeChar() {
    let s = [...this.state.strings];
    s.pop();
    this.setState({
      strings: s,
    });
  }

  removeEmoji = event => {
    let s = [...this.state.strings];
    let i = s.indexOf(event.target.value);
    s.splice(i,1)
    this.setState({
      strings: s
    })
  }

  addEmoji = event => {
    let s = [...this.state.strings];
    s.push(event.target.value);
    this.setState({
      strings: s
    })
  }

  render() {
    return (
      <div>
        <h1>Sketches</h1>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <button onClick={this.addEmoji} value='a'>🍊</button>

        <button onClick={this.removeEmoji} value='a'>🍊</button>
        {/* <button onClick={this.addChar} disabled={this.state.disable}>
          Add
        </button>
        <button onClick={this.removeChar}>
          Remove Last
        </button> */}
        <br />
        {this.state.strings}
        <P5Sketch strings={this.state.strings}></P5Sketch>
      </div>
    )
  }
}
