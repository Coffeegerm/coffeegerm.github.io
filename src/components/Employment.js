import React, { Component } from "react";
import EmploymentItem from "./EmploymentItem";

let idCount = 0;

const EMPLOYMENT_HISTORY = [
  {
    id: idCount + 1,
    timeFrame: "May, 2019 - Present",
    company: "CloudFit",
    jobTitle: "Software Development Engineer",
    description:
      "Working with a small team we built applications for large companies and helped move them from a paper solution to the future with a cloud based application."
  },
  {
    id: idCount + 1,
    timeFrame: "January, 2019 - May, 2019",
    company: "Belcan",
    jobTitle: "Supervisor of Windows 10 Migration",
    description:
      "I supervised the migration of a Volvo plant from using Windows 7 to Windows 10. With one other individual we migrated 963 desktops and laptops to Windows 10."
  },
  {
    id: idCount + 1,
    timeFrame: "June, 2018 - December, 2018",
    company: "Virginia Tech Transportation Institute",
    jobTitle: "IT Support",
    description:
      "Provided support for researchers and staff at the Virginia Tech Transportation Institute with any technical problems that they may come across. This ranged from software issues to full computer or component replacements."
  }
];

export default class Employment extends Component {
  render() {
    return (
      <section id="three">
        <h2>Employment History</h2>

        <EmploymentItem
          employment={EMPLOYMENT_HISTORY.map(
            ({ id, timeFrame, company, jobTitle, description }) => ({
              timeFrame,
              company,
              jobTitle,
              description
            })
          )}
        />
      </section>
    );
  }
}
