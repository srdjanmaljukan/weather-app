import React, { useEffect, useState } from "react";

function Current(props) {

    const [icon, setIcon] = useState({});
    const [temp, setTemp] = useState();

    useEffect(() => {
        let currentTemp = Math.round(props.current.temp);
        setTemp(currentTemp);
        let weatherIcon = props.current.weather[0].icon;
        setIcon(weatherIcon);
    }, [])

    return (
        <div className="current-weather">
            <div className="current-card card rounded-3">
                <div className="card-header">
                    <h2 className="my-0 fw-bold">{temp}°C</h2>
                </div>
                <div className="card-body">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="weather-icon"
                    />
                    <p className="description">Clear sky</p>
                </div>
            </div>
        </div>

    )
}

export default Current;