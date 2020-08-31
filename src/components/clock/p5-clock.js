import React from "react"
import { loadableP5 as P5Wrapper } from '../loadable';
import Sketch from './sketch-clock';

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return <P5Wrapper sketch={Sketch} />
  }
}