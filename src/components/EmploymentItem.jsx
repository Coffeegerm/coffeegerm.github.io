import React from 'react';
import PropTypes from 'prop-types';

const EmploymentItem = props => {
  const { employment } = props;
  const { company, timeFrame, jobTitle, description } = employment;

  return (
    <article className="6u 12u$(xsmall) work-item">
      <h2>
        <strong>{company}</strong>
      </h2>
      <p>{timeFrame}</p>
      <h3>{jobTitle}</h3>
      <p>{description}</p>
    </article>
  );
};

EmploymentItem.propTypes = {
  employment: PropTypes.object
};

export default EmploymentItem;
