import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project: { name, description, url, label } }) => (
  <article className="6u 12u$(xsmall) work-item">
    <h3>{name}</h3>
    <p>{description}</p>
    <a
      className="fit button slightMarginToTop"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label}
    </a>
  </article>
);

Project.propTypes = {
  project: PropTypes.object
};

export default Project;
