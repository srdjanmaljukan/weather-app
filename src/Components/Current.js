import React, { useEffect, useState } from "react";

function Current(props) {

    const [icon, setIcon] = useState({});
    const [temp, setTemp] = useState();
    const [description, setDescription] = useState("");

    useEffect(() => {
        let currentTemp = Math.round(props.current.temp);
        setTemp(currentTemp);
        let weatherIcon = props.current.weather[0].icon;
        setIcon(weatherIcon);
        let weatherDescription = props.current.weather[0].main;
        setDescription(weatherDescription);
    }, [props])

    return (
        <div id="current" className="current-weather">
            <div className="current-card card text-light rounded-3 z-n1 text-center mx-auto">
                <div className="card-header">
                    <h2 className="my-0 fw-bold">{temp}°C</h2>
                </div>
                <div className="card-body">
                    <img
                        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt="weather-icon"
                        className="mx-auto"
                    />
                    <p className="description fw-bold fs-1">{description}</p>
                </div>
            </div>
        </div>

    )
}

export default Current;