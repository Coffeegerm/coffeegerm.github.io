/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default class EmploymentItem extends React.PureComponent {
  render() {
    const { company, timeFrame, jobTitle, description } = this.props.employment;

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
  }
}
