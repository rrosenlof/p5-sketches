import React from "react"
import P5Sketch from "../components/sketch"
import '../../static/styles.css'

export default function Home() {
  return (
    <div className="body">
      <h1>Sketches</h1>
      <p>Made with <a href='https://p5js.org/' target="_">p5.js</a></p>
      <P5Sketch></P5Sketch>
    </div>
  )
}
