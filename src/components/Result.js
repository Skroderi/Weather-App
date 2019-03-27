import React from 'react';
import './Result.css'

const Result = (props) => {
    const { date, city, temp, img, country, humidity, description, pressure, wind, error } = props.data.current[0]

    // const dataa = new Date(props.data.forecast[0].time * 1000).getHours();
    // console.log(dataa);

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
                        <div className="panel">
                            <div className="hourDay">
                                <div className="hour">{props.data.forecast[0].time}</div>
                                <div className="day">{props.data.forecast[0].day}</div>
                            </div>
                            <div className="tempForecast"> {props.data.forecast[0].temp} &#8451;</div>
                            <div className="icon"><img src={props.data.forecast[0].img} alt="zdjęcie obrazujące pogode" /></div>
                        </div>
                        <div className="panel">
                            <div className="hourDay">
                                <div className="hour">{props.data.forecast[1].time}</div>
                                <div className="day">{props.data.forecast[1].day}</div>
                                <div className="tempForecast"> {props.data.forecast[1].temp} &#8451;</div>
                                <div className="icon"><img src={props.data.forecast[1].img} alt="zdjęcie obrazujące pogode" /></div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="hourDay">
                                <div className="hour">{props.data.forecast[2].time}</div>
                                <div className="day">{props.data.forecast[2].day}</div>
                                <div className="tempForecast"> {props.data.forecast[2].temp} &#8451;</div>
                                <div className="icon"><img src={props.data.forecast[2].img} alt="zdjęcie obrazujące pogode" /></div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="hourDay">
                                <div className="hour">{props.data.forecast[3].time}</div>
                                <div className="day">{props.data.forecast[3].day}</div>
                                <div className="tempForecast"> {props.data.forecast[3].temp} &#8451;</div>
                                <div className="icon"><img src={props.data.forecast[3].img} alt="zdjęcie obrazujące pogode" /></div>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="hourDay">
                                <div className="hour">{props.data.forecast[4].time}</div>
                                <div className="day">{props.data.forecast[4].day}</div>
                                <div className="tempForecast"> {props.data.forecast[4].temp} &#8451;</div>
                                <div className="icon"><img src={props.data.forecast[4].img} alt="zdjęcie obrazujące pogode" /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            {error ? `Niestety nie mamy w bazie miasta ${city}.` : weather}
        </>
    )
}

export default Result;