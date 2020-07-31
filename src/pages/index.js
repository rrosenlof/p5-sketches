import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default class Home extends React.Component {

  render() {
    return (
      <Layout>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <ul>
          <li><Link to='/emoji-grid'>Emoji Grid</Link></li>
        </ul>
        
      </Layout>
    )
  }
}
