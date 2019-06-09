import React, { Component } from "react";
import Project from "./Project";

const PROJECTS = [
  {
    id: "1",
    url: "https://github.com/Coffeegerm/GlucoseGuide",
    name: "Glucose Guide",
    description:
      "Android Application to assist Diabetics in keeping track of their blood sugars and insulin intake."
  }
];

export default class Portfolio extends Component {
  render() {
    return (
      <section id="two">
        <h2>Personal Projects</h2>

        <Project
          projects={PROJECTS.map(({ id, url, name, description }) => ({
            url,
            name,
            description
          }))}
        />

        <ul className="actions">
          <li>
            <a href="https://github.com/Coffeegerm" target="_blank" className="button">
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
