import React from "react"

export default function Layout({ children }) {
  return (
    <div style={{ maxWidth: `700px`,  margin: `0 auto`, padding: `0 1.2rem` }}>
      {children}
    </div>
  )
}