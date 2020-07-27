import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'

export default function Home() {
  return (
    <div>
      <h1>Sketches</h1>
      <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
      <P5Sketch></P5Sketch>
    </div>
  )
}
