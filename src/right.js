import React from "react";

export default function right() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Humidity: <span id="humidity">20</span>%
        </li>
        <li>
          Wind: <span id="wind">10</span> km/h
        </li>
      </ul>
    </div>
  );
}
