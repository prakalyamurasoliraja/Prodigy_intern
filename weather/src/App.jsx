import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <div className="col-6">
                <form className="search-form" id="search-form">
                  <input
                    type="text"
                    placeholder="Enter a city...           "
                    autoComplete="off"
                    className="form-control"
                    id="city-input"
                  />
                </form>
              </div>
              <div className="col-3">
                <form>
                  <button id="research" type="button" className="btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </form>
              </div>
              <div className="col-3">
                <form>
                  <button id="current" type="button" className="btn btn-success">
                    <i className="fas fa-map-marker-alt"></i>
                  </button>
                </form>
              </div>
            </div>

            <h1 id="city"> Rome</h1>
            <p id="today">
              {" "}
              <em></em>
            </p>
            <div className="row">
              <div className="col-6">
                <h3 id="description"> Clear </h3>
                <br />
                <div className="float-left current-weather">
                  <strong> </strong>{" "}
                  <img
                    src="http://openweathermap.org/img/wn/01d@2x.png"
                    alt="clear"
                    id="icon"
                  />{" "}
                  <span id="currentTemp"> 14</span>{" "}
                  <a href="/" id="celsius" className="active">
                    °C{" "}
                  </a>
                  |{" "}
                  <a href="/" id="fahrenheit">
                    °F{" "}
                  </a>{" "}
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span id="humidity">77</span>%{" "}
                    <i className="fas fa-hand-holding-water"></i>
                  </li>
                  <li>
                    Wind: <span id="wind">3</span> km/h{" "}
                    <i className="fas fa-wind"></i>
                  </li>
                </ul>
              </div>
            </div>
            <h4> 3 hour forecast</h4>
            <div className="row weather-forecast" id="forecast"></div>
            <br />
          </div>
          <small className="repository">
            <a
              href="https://github.com/martafreri2018/my-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>{" "}
            by Marta Freri
          </small>
        </div>
      </div>
    </div>
  );
}
