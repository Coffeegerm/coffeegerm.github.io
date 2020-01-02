import React from 'react';

const EmploymentItem = props => {
  const { company, timeFrame, jobTitle, description } = props.employment;

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

export default EmploymentItem;
