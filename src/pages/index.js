import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default class Home extends React.Component {
  
  render() {
    return (
      <Layout>
        <Link to='/emoji-grid'>Emoji Grid</Link>
      </Layout>
    )
  }
}
