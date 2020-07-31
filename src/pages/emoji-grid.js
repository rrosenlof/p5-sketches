import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'
import { EMOJIS } from '../../static/constants.js'
import Layout from "../components/layout"

const factor_range = [0.0001, 0.001, 0.005, 0.01, 0.05, 0.1, 0.5, 1, 10]

export default class EmojiGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: ['🥩', '🍑', '🧀', '🥦', '🧊', '🍇'],
      factor: 0.01
    }

    this.addEmoji = this.addEmoji.bind(this);
    this.changeFactor = this.changeFactor.bind(this);
  }

  addEmoji = event => {
    let s = [...this.state.strings];
    let i = s.indexOf(event.target.value);
    i === -1 ? s.push(event.target.value) : s.splice(i, 1)
    this.setState({
      strings: s
    });
  }

  changeFactor = event => {
    let f = Math.floor(Math.random() * factor_range.length)
    this.setState({
      factor: factor_range[f]
    })
  }

  render() {
    return (
      <Layout>
        <P5Sketch strings={this.state.strings} factor={this.state.factor}></P5Sketch>
        <button id='factor-button' key='factor' onClick={this.changeFactor} value={this.state.factor}>Change Factor</button>
        <p>Current factor: {this.state.factor}</p>
        <div className='buttons'>
          {EMOJIS.map((value, index) => {
            return <button key={index} onClick={this.addEmoji} value={value}>{value}</button>
          })}
        </div>
        <p style={{ innerHeight: `1rem` }}>{this.state.strings}</p>
      </Layout>
    )
  }
}
