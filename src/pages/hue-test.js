import React from "react"
import '../../static/styles.css'
// import Layout from "../components/layout"
import * as hq from 'hue-queue'

export default class Home extends React.Component {
  constructor() {
    super();
    const pal = this.getPalettes()

    this.state = {
      pals: pal,
      pal_size: 4
    }
  }

  getPalettes() {
    return hq.getAll();
  }

  render() {
    return (
      <div>
        <h1>Testing Hue Queue</h1>
        <label>Palette Size (0-5): </label>
        <input placeholder={this.state.pal_size} type='number' min='1' max='5' step='1' onChange={(e) => this.setState({ pal_size: e.target.value })} />
        <ul style={{ listStyleType: 'none' }}>
          {this.state.pals.filter(pal => pal.hex.colors.length == this.state.pal_size)
          .map(filteredPal => (
            <li key={filteredPal.name}>
              <p>{filteredPal.name}:</p>
              <div style={{ backgroundColor: filteredPal.hex.background, padding: `40px`, width: `290px` }}>
                {filteredPal.hex.colors.map((s) => <div key={s} style={{ height: `40px`, width: `200px`, border: `3px ${filteredPal.hex.stroke} solid`, margin: `10px 0`, backgroundColor: s }}></div>)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
