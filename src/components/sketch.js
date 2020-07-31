import React from 'react';
import Sketch from "react-p5";

export default class P5Sketch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cols: 20,
      rows: 20,
      s: 550,
      factor: props.factor,
      strings: props.strings
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.strings !== prevProps.strings) {
      this.setState({ strings: this.props.strings })
    }
    if (this.props.factor !== prevProps.factor) {
      this.setState({ factor: this.props.factor })
    }
  }

  setup = (p5, canvasParentRef) => {
    var step = this.state.s / this.state.cols
    p5.createCanvas(this.state.s + step*.2, this.state.s - step*.8).parent(canvasParentRef);
    p5.textSize(step*.8);
    p5.fill(240)
  };

  draw = (p5) => {
    p5.background(0);
    var step = this.state.s / this.state.cols

    for (let y = 1; y < this.state.rows; y++) {
      for (let x = 0; x < this.state.cols; x++) {
        var n = p5.noise(x * this.state.factor, y * this.state.factor, p5.frameCount * 0.005) * 2;
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

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <div>
        <Sketch setup={this.setup} draw={this.draw} />
      </div>
    )
  }
}
