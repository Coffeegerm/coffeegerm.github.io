import React from 'react';

const Footer = () => {
  return (
    <div id="footer">
      <div className="inner">
        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/coffeegerm"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Coffeegerm"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/david-yarzebinski-3890a3106/"
              target="_blank"
              rel="noopener noreferrer"
              className="icon fa-linkedin"
            >
              <span className="label">Linkdin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
