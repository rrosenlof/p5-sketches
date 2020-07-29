import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'
import { EMOJIS } from '../../static/constants.js'
import Layout from "../components/layout"

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      strings: ['🥩','🍑','🧀','🥦','🧊','🍇'],
    }

    this.addEmoji = this.addEmoji.bind(this);
  }

  addEmoji = event => {
    let s = [...this.state.strings];
    let i = s.indexOf(event.target.value);
    i === -1 ? s.push(event.target.value) : s.splice(i,1)
    this.setState({
      strings: s
    });
  }

  render() {
    return (
      <Layout>
        <h1>Sketches</h1>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <P5Sketch strings={this.state.strings}></P5Sketch>
        <div className='buttons'>
          {EMOJIS.map((value, index) => {
            return <button key={index} onClick={this.addEmoji} value={value}>{value}</button>
          })}
        </div>
        <br />
        <p style={{innerHeight: `1rem`}}>{this.state.strings}</p>
      </Layout>
    )
  }
}
