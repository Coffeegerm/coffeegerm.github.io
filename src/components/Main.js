import React, { Component } from 'react'

export default class Main extends Component {
  render() {
    return (
      <section id="one">
        <header className="major">
          <h2>
            "The quieter you become,
            <br />
            the more you can hear" - Ram Dass
          </h2>
        </header>
        <p>
          Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi
          lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis
          tortor primis integer massa adipiscing id nisi accumsan pellentesque
          commodo blandit enim arcu non at amet id arcu magna. Accumsan orci
          faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque
          cubilia.
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button">
              Learn More
            </a>
          </li>
        </ul>
      </section>
    )
  }
}
