import React from 'react';

const Address = () => (
  <div className="4u 12u$(small)">
    <ul className="labeled-icons">
      <li>
        <h3 className="icon fa-home">
          <span className="label">Address</span>
        </h3>
        Virginia
        <br />
        United States
      </li>
      <li>
        <h3 className="icon fa-mobile">
          <span className="label">Phone</span>
        </h3>
        434-426-5270
      </li>
      <li>
        <h3 className="icon fa-envelope-o">
          <span className="label">Email</span>
        </h3>
        <a href="mailto:dyarzebinski97@gmail.com">dyarzebinski97@gmail.com</a>
      </li>
    </ul>
  </div>
);

export default Address;
