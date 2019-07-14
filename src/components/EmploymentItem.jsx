/* eslint-disable consistent-return */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';

export default class EmploymentItem extends Component {
  renderEmploymentHistory = () => {
    const { employment } = this.props;

    if (!employment) return;

    const job = employment.map((item, index) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <article className="6u 12u$(xsmall) work-item" key={index}>
          <h2>
            <strong>{item.company}</strong>
          </h2>
          <p>{item.timeFrame}</p>
          <h3>{item.jobTitle}</h3>
          <p>{item.description}</p>
        </article>
      );
    });

    return <div className="row">{job}</div>;
  };

  render() {
    return <div>{this.renderEmploymentHistory()}</div>;
  }
}
