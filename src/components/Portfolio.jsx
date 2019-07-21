import React from 'react';
import Project from './Project';

const PROJECTS = [
  {
    id: '1',
    url: 'https://github.com/Coffeegerm/portfolio',
    name: 'Portfolio',
    description: 'This very website! I used Gatsby and React to build it!'
  },
  {
    id: '2',
    url: 'https://github.com/Coffeegerm/GlucoseGuide',
    name: 'Glucose Guide',
    description: 'Android Application to assist Diabetics in keeping track of their blood sugars and insulin intake.'
  },
  {
    id: '3',
    url: 'https://github.com/Coffeegerm/BetterBarista',
    name: 'Better Barista',
    description: 'A simple application to show users the beauty of making well crafted coffee at home.'
  }
];

export default class Portfolio extends React.PureComponent {
  renderProjects = () => {
    return PROJECTS.map(project => {
      return <Project project={project} />;
    });
  };

  render() {
    return (
      <section id="two">
        <h2>Personal Projects</h2>

        <div className="row">{this.renderProjects()}</div>

        <ul className="actions">
          <li>
            <a href="https://github.com/Coffeegerm" target="_blank" rel="noopener noreferrer" className="button">
              Full Portfolio
            </a>
          </li>
        </ul>
      </section>
    );
  }
}
