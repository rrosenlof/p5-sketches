import React from "react";
import P5 from "../components/rings/p5-rings";
import Layout from "../components/layout";

export default class Sketch2 extends React.Component {
  constructor() {
    super()
    this.state = {
      rings: 40,
      stroke: 5,
      spacing: 8,
      inner: 3,
    }

    // binding may be needed here
    this.changeFactor = this.changeFactor.bind(this);
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
        <h2>Rings</h2>
        <P5 rings={this.state.rings} stroke={this.state.stroke} spacing={this.state.spacing}/>
        <div>
          <h4>Rings:</h4>
          <input className="rings-sliders" name='rings' id='id' type="range" min="1" max="150" step="1" value={this.state.rings} onChange={this.changeFactor} />
          <input readOnly='readonly' name='rings' id='emoji-input' type='number' value={this.state.rings} onChange={this.changeFactor} min="1" max="150" step="1"/>
        </div>
        <div>
          <h4>Stroke:</h4>
          <input name='stroke' id='id' type="range" min="1" max="60" step="1" value={this.state.stroke} onChange={this.changeFactor} />
          <input readOnly='readonly' name='stroke' id='emoji-input' type='number' value={this.state.stroke} onChange={this.changeFactor} min="1" max="60" step="1"/>
        </div>
        <div>
          <h4>Ring Spacing:</h4>
          <input name='spacing' id='id' type="range" min="1" max="100" step="1" value={this.state.spacing} onChange={this.changeFactor} />
          <input readOnly='readonly' name='spacing' id='emoji-input' type='number' value={this.state.spacing} onChange={this.changeFactor} min="1" max="100" step="1"/>
        </div>
        {/* <div>
          <h4>Inner Ring Diameter:</h4>
          <input name='inner' id='id' type="range" min="1" max="100" step="1" value={this.state.inner} onChange={this.changeFactor} />
          <input readOnly='readonly' name='inner' id='emoji-input' type='number' value={this.state.inner} onChange={this.changeFactor} min="1" max="100" step="1"/>
        </div> */}
        <div style={{ height: `5rem`}}></div>
      </Layout>
    )
  }
}