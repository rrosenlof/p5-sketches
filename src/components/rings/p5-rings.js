import React from "react"
import { loadableP5 as P5Wrapper } from '../loadable';
import Sketch from './sketch-rings';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      grid: props.grid
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.grid !== prevProps.grid) {
      this.setState({ grid: this.props.grid })
    }
  }

  render() {
    return <P5Wrapper grid={this.state.grid} sketch={Sketch} />
  }
}