import React from "react";

export default function left() {
  return (
    <div className="col-6">
      <div className="clearfix weather-temperature">
        <img
          src="https://openweathermap.org/img/wn/03d@2x.png"
          alt=""
          className="float-left"
          id="icon"
        />
        <div className="float-left">
          <strong id="temperature"></strong>
          <span className="units">40 °F </span>
        </div>
      </div>
    </div>
  );
}
