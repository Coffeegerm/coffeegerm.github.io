import React from "react";

import Footer from "./Footer";
import avatar from "../assets/images/avatar.jpg";

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <a href="#" className="image avatar">
            <img src={avatar} alt="" />
          </a>
          <h1>
            <strong>I am David Yarzebinski </strong>
            <br /> a Software Engineer
            <br /> with a foresight for clean code
            <br /> and beautifully simple design.
          </h1>
        </div>
        <Footer />
      </header>
    );
  }
}

export default Header;
