import React from "react"
import { loadableP5 as P5Wrapper } from '../loadable';
import Sketch from './sketch-rings';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      rings: props.rings,
      stroke: props.stroke,
      spacing: props.spacing,
      // inner: props.inner,
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.rings !== prevProps.rings) {
      this.setState({ rings: this.props.rings })
    }
    if (this.props.stroke !== prevProps.stroke) {
      this.setState({ stroke: this.props.stroke })
    }
    if (this.props.spacing !== prevProps.spacing) {
      this.setState({ spacing: this.props.spacing })
    }
    // if (this.props.inner !== prevProps.inner) {
    //   this.setState({ inner: this.props.inner })
    // }
  }

  render() {
    return <P5Wrapper 
    rings={this.state.rings} stroke={this.state.stroke} spacing={this.state.spacing} sketch={Sketch} />
  }
}