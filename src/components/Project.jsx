/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';

const Project = props => {
  const { name, description, url, label } = props.project;

  return (
    <article className="6u 12u$(xsmall) work-item">
      <h3>{name}</h3>
      <p>{description}</p>
      <a className="fit button slightMarginToTop" href={url} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </article>
  );
};

export default Project;
