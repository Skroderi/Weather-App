import React, { Component } from "react";
import Form from "./Form";
import Result from "./Result";
import "../stylesheet/App.css";
import { connect } from "react-redux";
import { setWeather, setWeatherGeo } from "../actions/wheater";

class App extends Component {
  state = {
    inputValue: "",
    isGeoButtonDisabled: false,
    isSearchButtonDisabled: false
  };

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  getWeatherInfo = e => {
    const { setWeather } = this.props;
    const { inputValue } = this.state;
    e.preventDefault();

    if (!inputValue) {
      return alert("Enter city!");
    } else {
      setWeather(inputValue);
      this.setState({
        isSearchButtonDisabled: true
      });
      setTimeout(() => this.setState({ isSearchButtonDisabled: false }), 1000);
    }
  };

  getWeatherFromGeo = () => {
    const { setWeatherGeo } = this.props;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setWeatherGeo(position.coords.latitude, position.coords.longitude);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  handlerGeoBtn = () => {
    this.getWeatherFromGeo();
    this.setState({
      isGeoButtonDisabled: true
    });
    setTimeout(() => this.setState({ isGeoButtonDisabled: false }), 1000);
  };

  componentDidMount() {
    this.getWeatherFromGeo();
  }

  render() {
    const {
      inputValue,
      isGeoButtonDisabled,
      isSearchButtonDisabled
    } = this.state;
    const { weather } = this.props;

    return (
      <div className="App">
        <h1>Weather App</h1>
        <Form
          value={inputValue}
          change={this.handleInputChange}
          submit={this.getWeatherInfo}
          location={this.handlerGeoBtn}
          isButtonDisabled={isGeoButtonDisabled}
          isSearchButtonDisabled={isSearchButtonDisabled}
        />
        {weather.error ? (
          <div className="error">
            <p>Sorry, We don't have this city in database. </p>
          </div>
        ) : (
          weather.loaded && <Result />
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  weather: state.weather
});

export default connect(mapStateToProps, { setWeather, setWeatherGeo })(App);
