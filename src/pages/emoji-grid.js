import React from "react";
import P5 from "../components/emoji-grid/p5-emoji-grid";
import Layout from "../components/layout";
import { EMOJIS } from '../../static/constants.js'

export default class Sketch2 extends React.Component {
  constructor() {
    super()
    this.state = {
      strings: ['🥩', '🍑', '🧀', '🥦', '🧊', '🍇'],
      factor: 0.01,
      frame: 0.003,
      grid: 40,
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
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  render() {
    return (
      <Layout>
        <h2>Emoji Grid</h2>
        <div style={{ display: 'flex' }}>
          <div style={{ flex: `1`, marginRight: `1rem` }}>
            <P5 grid={this.state.grid} frame={this.state.frame} strings={this.state.strings} factor={this.state.factor} />
          </div>
          <div style={{ flex: `1` }}>
            <div>
              <h4>Grid Size:</h4>
              <input name='grid' id='emoji-slider' type="range" min="3" max="75" step="1" value={this.state.grid} onChange={this.changeFactor} />
              <input readOnly='readonly' name='grid' id='emoji-input' type='number' value={this.state.grid} onChange={this.changeFactor} min="3" max="75" step="1" />

            </div>
            <div>
              <h4>Noise Factor:</h4>
              <input name='factor' id='emoji-slider' type="range" min="0.0001" max="1" step="0.0001" value={this.state.factor} onChange={this.changeFactor} />
              <input name='factor' id='emoji-input' type='number' value={this.state.factor} onChange={this.changeFactor} min='0.0001' max='1' step="0.0001" />
            </div>
            <div>
              <h4>Frame:</h4>
              <input name='frame' id='emoji-slider' type="range" min="0.00001" max="0.025" step="0.00001" value={this.state.frame} onChange={this.changeFactor} />
              <input name='frame' id='emoji-input' type='number' value={this.state.frame} onChange={this.changeFactor} min='0.00001' max='0.025' step="0.00001" />
            </div>
            <div className='buttons'>
              <h4>Characters:</h4>
              {EMOJIS.map((value, index) => {
                return <button key={index} onClick={this.addEmoji} value={value}>{value}</button>
              })}
            </div>
            <p style={{ innerHeight: `1rem` }}>{this.state.strings}</p>
          </div>
        </div>
      </Layout>
    )
  }
}