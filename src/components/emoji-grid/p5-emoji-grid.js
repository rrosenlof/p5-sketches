import React from "react"
import { loadableP5 as P5Wrapper } from '../loadable';
import Sketch from './sketch-emoji-grid';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: props.grid,
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

  render() {
    return <P5Wrapper grid={this.state.grid} frame={this.state.frame} strings={this.state.strings} factor={this.state.factor} sketch={Sketch} />
  }
}