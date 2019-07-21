/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

export default class Project extends React.PureComponent {
  render() {
    const { name, description, url } = this.props.project;

    return (
      <article className="6u 12u$(xsmall) work-item">
        <h3>{name}</h3>
        <p>{description}</p>
        <a className="fit button slightMarginToTop" href={url} target="_blank" rel="noopener noreferrer">
          Repository
        </a>
      </article>
    );
  }
}
