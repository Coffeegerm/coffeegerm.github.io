/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { Component } from 'react';

export default class Project extends Component {
  renderProjects = () => {
    const { projects } = this.props;

    if (!projects) return;

    const project = projects.map((item, index) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={index}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <a className="fit button" href={item.url}>
            Repository
          </a>
        </article>
      );
    });

    return <div className="row">{project}</div>;
  };

  render() {
    return <div>{this.renderProjects()}</div>;
  }
}
