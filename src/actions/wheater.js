import { SET_WEATHER, SET_ERROR } from "../actions/types";
const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;

export function setWeather(value) {
  const Api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${ApiKey}&units=metric`;
  const ForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${ApiKey}&units=metric`;

  return async function(dispatch) {
    const currentWeather = await fetch(Api);
    const forecastWeather = await fetch(ForecastApi);

    const weatherData = await currentWeather.json();

    const forecastData = await forecastWeather.json();

    const data = { ...weatherData, ...forecastData };

    if (data.cod.toString() === "200") {
      dispatch({
        type: SET_WEATHER,
        payload: data
      });
    } else {
      dispatch({
        type: SET_ERROR
      });
    }
  };
}

export function setWeatherGeo(latitude, longitude) {
  const currentGeoApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;
  const forecastGeoApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`;

  return async function(dispatch) {
    const currentWeather = await fetch(currentGeoApi);
    const forecastWeather = await fetch(forecastGeoApi);

    const weatherData = await currentWeather.json();

    const forecastData = await forecastWeather.json();

    const data = { ...weatherData, ...forecastData };

    if (data.cod.toString() === "200") {
      dispatch({
        type: SET_WEATHER,
        payload: data
      });
    } else {
      dispatch({
        type: SET_ERROR
      });
    }
  };
}
