import React, { Component } from 'react';
import Form from './Form';
import Result from './Result'
import './App.css';

const ApiKey = process.env.REACT_APP_WEATHER_API_KEY
class App extends Component {
  state = {
    current: [
      {
        inputValue: '',
        date: '',
        city: '',
        sunrise: '',
        sunset: '',
        temp: '',
        pressure: '',
        wind: '',
        img: [],
        country: '',
        humidity: '',
        description: '',
        error: false
      }
    ],
    forecast: [],
    latitude: '',
    longitude: '',
    isButtonDisabled: false,
    isSearchButtonDisabled: false,
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleInputSubmit = (e) => {
    e.preventDefault()
    const Api = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${ApiKey}&units=metric`
    const ForecastApi = `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.inputValue}&appid=${ApiKey}&units=metric`

    if (!this.state.inputValue) return alert('Wprowadź miasto!')
    // anty spam for clicking search this same city
    if (this.state.inputValue === this.state.current[0].city) {
      this.setState({
        isSearchButtonDisabled: true,
      })
      setTimeout(() => this.setState({ isSearchButtonDisabled: false }), 2000);
    }

    // Getting current weather info
    fetch(Api)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())
      .then(data => {
        this.setState(({
          current: [
            {
              inputValue: "",
              error: false,
              date: new Date().toLocaleString(),
              city: data.name,
              sunrise: data.sys.sunrise,
              sunset: data.sys.sunset,
              temp: data.main.temp.toFixed(1),
              pressure: `${data.main.pressure} hPa`,
              wind: `${(data.wind.speed * 3.6).toFixed(1)}  km/h`,
              img: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
              country: data.sys.country,
              humidity: `${data.main.humidity}%`,
              description: data.weather[0].description.toUpperCase(),
            }]
        }))
      })
      .catch(error => {
        console.log(error)
        this.setState({
          current: [{
            error: true,
            city: this.state.inputValue
          }]
        })
      })

    // Getting forecasts weather info
    fetch(ForecastApi)
      .then(response => {
        if (response.ok) return response
        throw Error('Błąd')
      })
      .then(response => response.json())

      // Slice forecasts data to 10 obejcts  ---  1 obejct = 3 hours forecast weather
      .then(forecast => forecast.list.slice(0, 10))
      .then(forecast => {
        this.setState({
          forecast
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          current: [{
            error: true,
            city: this.state.inputValue
          }]
        })
      })
  }
  // Get  geo location after click in button 'Get location'
  handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          isButtonDisabled: true
        })
      });
      // Disabled button after click( anty spam  clicking)
      setTimeout(() => this.setState({ isButtonDisabled: false }), 3000);
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  // Getting automaticaly geo location
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      });
    }
    else {
      console.log("Geolocation is not supported by this browser.");
    }

    if (this.state.longitude) {
      this.showFormLoc()
    }
  }

  // Automaticaly get and show current and forecast weather if user allowed to share geo location
  componentDidUpdate() {
    const currentGeoApi = `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${ApiKey}&units=metric`
    const forecastGeoApi = `https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&appid=${ApiKey}&units=metric`
    if (this.state.latitude && this.state.longitude) {

      // get current weather from geo loc
      fetch(currentGeoApi)
        .then(response => {
          if (response.ok) return response
          throw Error('Błąd')
        })
        .then(response => response.json())
        .then(data => {
          const time = new Date().toLocaleString()
          this.setState({
            current: [
              {
                inputValue: "",
                error: false,
                date: time,
                city: data.name,
                sunrise: data.sys.sunrise,
                sunset: data.sys.sunset,
                temp: data.main.temp.toFixed(1),
                pressure: `${data.main.pressure} hPa`,
                wind: `${(data.wind.speed * 3.6).toFixed(1)}  km/h`,
                img: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                country: data.sys.country,
                humidity: `${data.main.humidity}%`,
                description: data.weather[0].description.toUpperCase(),
              }],
            latitude: '',
            longitude: '',
          })
        })
        .catch(error => {
          console.log(error)
        })

      // get forecast weather from geo loc
      fetch(forecastGeoApi)
        .then(response => {
          if (response.ok) return response
          throw Error('Błąd')
        })
        .then(response => response.json())
        .then(forecast => forecast.list.slice(0, 10))
        .then(forecast => {
          this.setState({
            forecast
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({
            current: [{
              error: true,
              city: this.state.inputValue
            }]
          })
        })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form
          value={this.state.current.inputValue}
          change={this.handleInputChange}
          submit={this.handleInputSubmit}
          location={this.handleGetLocation}
          show={this.showFormLoc}
          isButtonDisabled={this.state.isButtonDisabled}
          isSearchButtonDisabled={this.state.isSearchButtonDisabled} />
        <Result data={this.state} />

      </div>
    );
  }
}

export default App;
