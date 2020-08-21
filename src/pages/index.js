import React from "react"
import '../../static/styles.css'
import Layout from "../components/layout"
import { Link } from 'gatsby'

export default class Home extends React.Component {

  render() {
    return (
      <Layout>
        <p>Made with <a href='https://p5js.org/' target="_">p5.js</a> by <a href='https://github.com/rrosenlof'>@rrosenlof</a></p>
        <div style={{ marginLeft: `1rem`}}>
        <ul>
          <li><Link to='/emoji-grid'>Emoji Grid</Link>: A Perlin noise field using various Emojis as characters</li>
          <li><Link to='/rings'>Rings</Link>: Concurrent circles with Perlin noise</li>
        </ul>
        </div>
        <p style={{ fontStyle: `italic`, fontSize: `90%`}}><b>Warning:</b> Some of these sketches have flashing images or designs that may affect those prone to seizures or epilepsy</p>
      </Layout>
    )
  }
}
