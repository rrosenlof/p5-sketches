import React from 'react';
import Sketch from "react-p5";

export default class EmojiGridSketch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: props.grid,
      s: 550,
      factor: props.factor,
      strings: props.strings,
      frame: props.frame
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.strings !== prevProps.strings) {
      this.setState({ strings: this.props.strings })
    }
    if (this.props.factor !== prevProps.factor) {
      this.setState({ factor: this.props.factor })
    }
    if (this.props.frame !== prevProps.frame) {
      this.setState({ frame: this.props.frame })
    }
    if (this.props.grid !== prevProps.grid) {
      this.setState({ grid: this.props.grid })
    }
  }

  setup = (p5, canvasParentRef) => {
    var step = this.state.s / this.state.grid
    p5.createCanvas(this.state.s + step*.2, this.state.s - step*.8).parent(canvasParentRef);
    p5.fill(240)
  };

  draw = (p5) => {
    p5.background(0);
    var step = this.state.s / this.state.grid
    p5.textSize(step*.8);

    for (let y = 1; y < this.state.grid; y++) {
      for (let x = 0; x < this.state.grid; x++) {
        var n = p5.noise(x * this.state.factor, y * this.state.factor, p5.frameCount * this.state.frame) * 2;
        n = (n - p5.int(n)) * 3;
        var cx = p5.sin(n);
        var cy = p5.cos(n);
        var i = p5.floor(p5.map(cx * cy, -0.5, 0.45, 0, this.state.strings.length - 1));
        p5.text(this.state.strings[i], x * step + 3, y * step);

        // console.log(this.state.strings[i])
      }
    }

    // p5.noLoop();
  };

  render() {
    return (
      <div>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    )
  }
}
