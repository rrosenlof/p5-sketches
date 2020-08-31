import React from "react";
import P5 from "../components/clock/p5-clock";
import Layout from "../components/layout";
export default class Sketch2 extends React.Component {
  constructor() {
    super()
    
  }

  render() {
    return (
      <Layout>
        <h2>Clock</h2>

        <div style={{ flex: `1`, marginRight: `1rem` }}>
          <P5 />
        </div>

      </Layout>
    )
  }
}