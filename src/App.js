import React from "react";
import ReactDOM from "react-dom";
import CityName from "./cityName";
import SearchEngine from "./searchEngine";
import Footer from "./footer";
import Left from "./left";
import Right from "./right";

import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <SearchEngine />

          <CityName />

          <div className="row">
            <Left />
            <Right />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
