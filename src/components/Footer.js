import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/coffeegerm"
                target="_blank"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Coffeegerm"
                target="_blank"
                className="icon fa-github"
              >
                <span className="label">Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
