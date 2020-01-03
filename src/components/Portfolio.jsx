import React from 'react';
import Project from './Project';

const PROJECTS = [
  {
    id: '1',
    url: 'https://github.com/Coffeegerm/portfolio',
    name: 'Portfolio',
    description: 'This very website! I used Gatsby and React to build it!',
    label: 'Repository'
  },
  {
    id: '2',
    url: 'https://github.com/Coffeegerm/GlucoseGuide',
    name: 'Glucose Guide',
    description:
      'Android Application to assist Diabetics in keeping track of their blood sugars and insulin intake.',
    label: 'Repository'
  },
  {
    id: '3',
    url: 'https://github.com/Coffeegerm/BetterBarista',
    name: 'Better Barista',
    description:
      'A simple application to show users the beauty of making well crafted coffee at home.',
    label: 'Repository'
  },
  {
    id: '4',
    url: 'http://www.randdiron.com',
    name: 'R and D Iron',
    description:
      'A single page application built for a local welding company to allow clients to contact them via a form entry and to display photos of previous work.',
    label: 'Site'
  },
  {
    id: '5',
    url: 'https://github.com/Coffeegerm/sarcasti-ball',
    name: 'Sarcasti Ball',
    description:
      'Silly application using Express Node server and React to give you a sarcastic response from a magic 8 ball',
    label: 'Repository'
  }
];

const Portfolio = () => (
  <section id="two">
    <h2>Personal Projects</h2>

    <div className="row">
      {PROJECTS.map(project => (
        <Project project={project} />
      ))}
    </div>

    <ul className="actions">
      <li>
        <a
          href="https://github.com/Coffeegerm"
          target="_blank"
          rel="noopener noreferrer"
          className="button"
        >
          Full Portfolio
        </a>
      </li>
    </ul>
  </section>
);

export default Portfolio;
