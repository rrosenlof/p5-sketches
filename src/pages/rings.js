import React from "react";
import P5 from "../components/rings/p5-rings";
import Layout from "../components/layout";

export default class Sketch2 extends React.Component {
  constructor() {
    super()
    this.state = {
      grid: 40
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
        <P5 grid={this.state.grid} />
        <div>
          <h4>Change a state var:</h4>
          <input name='grid' id='id' type="range" min="3" max="75" step="1" value={this.state.grid} onChange={this.changeFactor} />
        </div>
      </Layout>
    )
  }
}