import React, { Component } from "react";
import Project from "./Project";

import thumb01 from "../assets/images/thumbs/01.jpg";
import thumb02 from "../assets/images/thumbs/02.jpg";
import thumb03 from "../assets/images/thumbs/03.jpg";
import thumb04 from "../assets/images/thumbs/04.jpg";
import thumb05 from "../assets/images/thumbs/05.jpg";
import thumb06 from "../assets/images/thumbs/06.jpg";

import full01 from "../assets/images/fulls/01.jpg";
import full02 from "../assets/images/fulls/02.jpg";
import full03 from "../assets/images/fulls/03.jpg";
import full04 from "../assets/images/fulls/04.jpg";
import full05 from "../assets/images/fulls/05.jpg";
import full06 from "../assets/images/fulls/06.jpg";

const DEFAULT_IMAGES = [
  {
    id: "1",
    src: full01,
    thumbnail: thumb01,
    caption: "Photo 1",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "2",
    src: full02,
    thumbnail: thumb02,
    caption: "Photo 2",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "3",
    src: full03,
    thumbnail: thumb03,
    caption: "Photo 3",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "4",
    src: full04,
    thumbnail: thumb04,
    caption: "Photo 4",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "5",
    src: full05,
    thumbnail: thumb05,
    caption: "Photo 5",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  },
  {
    id: "6",
    src: full06,
    thumbnail: thumb06,
    caption: "Photo 6",
    description: "Lorem ipsum dolor sit amet nisl sed nullam feugiat."
  }
];

export default class Portfolio extends Component {
  render() {
    return (
      <section id="two">
        <h2>Personal Projects</h2>

        <Project
          images={DEFAULT_IMAGES.map(
            ({ id, src, thumbnail, caption, description }) => ({
              src,
              thumbnail,
              caption,
              description
            })
          )}
        />

        <ul className="actions">
          <li>
            <a
              href="https://github.com/Coffeegerm"
              target="_blank"
              className="button"
            >
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
