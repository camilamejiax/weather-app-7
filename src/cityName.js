import React from "react";

export default function cityName() {
  return (
    <div className="overview">
      <h1>New York City</h1>
      <ul>
        <li>
          Last Updated at <span id="date">01:30 PM</span>
        </li>
        <li id="description">Windy</li>
      </ul>
    </div>
  );
}
