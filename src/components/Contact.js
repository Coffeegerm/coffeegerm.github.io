import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <section id="four">
        <h2>Talk to Me</h2>
        <p>
          If interested in communicating with me, feel free to send me a message
          through Twitter or an email. I'm always willing to chat about code or
          other things!
        </p>
        <div className="row">
          <div className="8u 12u$(small)">
            <form method="post" action="#">
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </form>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>

          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Virginia
                <br />
                United States
              </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                434-426-5270
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:dyarzebinski97@gmail.com">
                  dyarzebinski97@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}
