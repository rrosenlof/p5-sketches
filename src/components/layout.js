import React from "react"
import { Link } from 'gatsby'

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: `700px`, margin: `0 auto`, padding: `0 1.2rem` }}>
      <Link to='/'><h1>P5 Sketches</h1></Link>
      <hr />
      {children}
    </div>
  )
}