import React from "react";

function Icon(props) {
    return (
        <div className="icon-card card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
                <h4 className="my-0 fw-bold">{props.time}</h4>
            </div>
            <div className="card-body">
                <img src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt="weather-icon" />
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">{props.temp}°C</h1>
            </div>
        </div>
    )
}

export default Icon;