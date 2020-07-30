import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: `700px`, margin: `0 auto`, padding: `0 1.2rem` }}>
      <h1>Sketches</h1>
      <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
      {children}
    </div>
  )
}