import React from "react";
import "../stylesheet/Result.css";
import Forecast from "./Forecast";
import { connect } from "react-redux";

const Result = ({ weather }) => {
  const date = new Date().toLocaleString();
  const wind = `${(weather.wind.speed * 3.6).toFixed(1)}  km/h`;

  return (
    <>
      <div className="main">
        <div className="first">
          <div className="city">
            <h2>
              {weather.name}, {weather.sys.country}
            </h2>
            <p>
              <strong>{date}</strong>
            </p>
          </div>

          <div className="temp">
            <img
              src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="weather icon"
            />
            <h1>{weather.main.temp} &#8451;</h1>
          </div>
          <p>{weather.weather[0].description.toUpperCase()}</p>
          <div className="parametrs">
            <div className="humidity other">
              Humidity: <h4>{weather.main.humidity}</h4>
            </div>
            <div className="pressure other">
              Pressure: <h4>{weather.main.pressure}</h4>
            </div>
            <div className="wind other">
              Wind:<h4>{wind}</h4>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            {weather.list.slice(0, 10).map((forecast, index) => (
              <Forecast
                key={index}
                temp={forecast.main.temp}
                day={forecast.dt}
                time={forecast.dt}
                img={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  weather: state.weather
});
export default connect(mapStateToProps)(Result);
