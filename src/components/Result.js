import React from 'react';
import './Result.css';
import Forecast from './Forecast';

const Result = (props) => {
    const { date, city, temp, img, country, humidity, description, pressure, wind, error } = props.data.current[0];

    // create single(3 hours) forecast weather
    const forecasts = props.data.forecast.map((forecast, index) => <Forecast key={index} temp={forecast.main.temp} day={forecast.dt} time={forecast.dt} img={`https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`} />);

    // if any city match to weather base then show error
    const errorMsg = (
        <div>
            <h4>Niestety nie mamy w bazie miasta {city}</h4>
        </div>
    )

    let weather = null
    if (!error && city) {
        weather = (
            <div className="main">
                <div className="first">
                    <div className="city"> <h2>{city}, {country}</h2>
                        <p><strong>{date}</strong></p>
                    </div>

                    <div className="temp">
                        <img src={img} alt="zdjęcie obrazujące pogode" />
                        <h1>{temp} &#8451;</h1>
                    </div>
                    <p>{description}</p>
                    <div className='parametrs'>
                        <div className="humidity other">  Wilgotność: <h4>{humidity}</h4>
                        </div>
                        <div className="pressure other"> Ciśnienie: <h4>{pressure}</h4>
                        </div>
                        <div className="wind other"> Wiatr:<h4>{wind}</h4>
                        </div >
                    </div>
                </div>
                <div className='box' >
                    <div className="box-content" >
                        {forecasts}
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {error ? errorMsg : weather}
        </>
    )
}

export default Result;