import React from 'react';
import Sketch from "react-p5";

export default class P5Sketch extends React.Component {
  state = {
    cols: 40,
    rows: 40,
    s: 700,
    factor: 0.03,
    strings: this.props.strings
  }


  setup = (p5, canvasParentRef) => {
    var step = this.state.s / this.state.cols
    p5.createCanvas(this.state.s, this.state.s - step).parent(canvasParentRef);
    p5.textSize(step);
    p5.fill(240)
  };

  draw = (p5) => {
    p5.background(0);
    var step = this.state.s / this.state.cols

    for (let y = 1; y < this.state.rows; y++) {
      for (let x = 0; x < this.state.cols; x++) {
        var n = p5.noise(x * this.state.factor, y * this.state.factor, p5.frameCount * 0.01) * 2;
        n = (n - p5.int(n)) * 3;
        var cx = p5.sin(n);
        var cy = p5.cos(n);
        var i = p5.floor(p5.map(cx * cy, -0.5, 0.45, 0, this.state.strings.length - 1));
        p5.text(this.state.strings[i], x * step + 3, y * step);

        console.log(this.state.strings[i])
      }
    }

    p5.noLoop();
  };

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    return <Sketch setup={this.setup} draw={this.draw} />
  }
}
