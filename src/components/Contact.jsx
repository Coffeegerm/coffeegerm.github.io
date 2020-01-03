import React, { PureComponent } from 'react';

import Address from './Address';

class Contact extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };

  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };

  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  render() {
    const { name, email, message } = this.state;

    return (
      <section id="four">
        <h2>Talk to Me</h2>
        <p>
          If interested in communicating with me, feel free to send me a message
          through Twitter or an email. I&apos;m always willing to chat about
          code or other things!
        </p>
        <div className="row">
          <div className="8u 12u$(small)">
            <form
              action={`mailto:dyarzebinski97@gmail.com?subject=Let's Talk!`}
              method="POST"
              encType="text/plain"
            >
              <div className="row uniform 50%">
                <div className="6u 12u$(xsmall)">
                  <input
                    type="text"
                    name="Name"
                    id="name"
                    placeholder="Name"
                    onChange={this.handleNameChange}
                    value={name}
                  />
                </div>
                <div className="6u 12u$(xsmall)">
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email"
                    onChange={this.handleEmailChange}
                    value={email}
                  />
                </div>
                <div className="12u">
                  <textarea
                    name="Message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                    onChange={this.handleMessageChange}
                    value={message}
                  />
                </div>
              </div>
              <ul className="actions slightMarginToTop">
                <li>
                  <input type="submit" value="Send Message" />
                </li>
              </ul>
            </form>
          </div>

          <Address />
        </div>
      </section>
    );
  }
}

export default Contact;
