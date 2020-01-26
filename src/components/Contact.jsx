import React, { PureComponent, useState } from 'react';

import Address from './Address';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleMessageChange = event => {
    setMessage(event.target.value);
  };

  return (
    <section id="four">
      <h2>Talk to Me</h2>
      <p>
        If interested in communicating with me, feel free to send me a message
        through Twitter or an email. I&apos;m always willing to chat about code
        or other things!
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
                  onChange={handleNameChange}
                  value={name}
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="Email"
                  id="email"
                  placeholder="Email"
                  onChange={handleEmailChange}
                  value={email}
                />
              </div>
              <div className="12u">
                <textarea
                  name="Message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                  onChange={handleMessageChange}
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
};

export default Contact;
