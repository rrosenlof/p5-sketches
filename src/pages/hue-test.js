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
        <h1>Hue Queue – All Palettes</h1>
        <ul className='hue-ul flex-ul'>
          {this.state.pals
            .map(filteredPal => (
              <li key={filteredPal.name}>
                <h4>{filteredPal.name}:</h4>
                <div className='palette' style={{ backgroundColor: filteredPal.background }}>
                  {filteredPal.colors.map((s) => <div key={s} style={{ height: `70px`, border: `3px ${filteredPal.stroke} solid`, margin: `12px 0`, backgroundColor: s, position: 'relative', }}><span className='pal-span'>{s}</span></div>)}
                </div>
                <div className='li-detail'>
                  <p >Background: {filteredPal.background}</p>
                  <p>Stroke: {filteredPal.stroke}</p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}