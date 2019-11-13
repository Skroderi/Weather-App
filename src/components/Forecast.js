import React from "react";
const Forecast = props => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  return (
    <div>
      <div className="panel">
        <div className="hourDay">
          <div className="hour">
            {new Date(props.time * 1000).getHours() + ":00"}
          </div>
          <div className="day">
            {days[new Date(props.day * 1000).getUTCDay()]}
          </div>
        </div>
        <div className="tempForecast"> {props.temp} &#8451;</div>
        <div className="icon">
          <img src={props.img} alt="weather icon" />
        </div>
      </div>
    </div>
  );
};

export default Forecast;
