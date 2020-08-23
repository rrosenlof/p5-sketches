import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import * as hq from 'hue-queue'

export default class Home extends React.Component {
  constructor() {
    super();
    const pal = this.getPalette()

    this.state = {
      pal: pal
    }
  }

  getPalette() {
    return hq.getAll();
  }

  render() {
    const pals = []
    for (const [key, value] of this.state.pal.entries()) {
      pals.push(<li key={key}>  
        <p>{value.name}:</p>
        <div style={{ backgroundColor: value.background, padding: `40px`, width: `290px`}}>
        {value.colors.map((s) => <div key={s} style={{ height: `40px`, width: `200px`, border: `3px ${value.stroke} solid`, margin: `10px 0`, backgroundColor: s }}></div>)}
        </div>
        </li>)
    }

    return (
      <div style={{ backgroundColor: `#fff`}}>
        <h1>Testing Hue Queue</h1>
        <ul style={{ listStyleType: 'none' }}>{pals}</ul>
      </div>
    )
  }
}
