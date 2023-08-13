import React from "react";

function Icon(props) {
    return (
        <div className={`${props.type === "hourly" ? "icon-card-narrow" : "icon-card-wide"} card mb-4 rounded-3 shadow-sm`}>
            {props.type === "hourly" ? <div className="card-header py-3">
                <h4 className="my-0 fw-bold">{props.day}</h4>
                <h2 className="my-0 fw-bold">{props.time}</h2>
            </div> : null}
            {props.type === "daily" ? <div className="card-header py-3">
                <h4 className="my-0 fw-bold">{props.day}</h4>
                <h2 className="my-0 fw-bold">{props.date}</h2>
            </div> : null}
            <div className="card-body">
                <img src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt="weather-icon" />
            </div>
            <div className="card-body">
                <h1 className="card-title pricing-card-title">{props.temp}°C</h1>
                {props.type === "daily" ? <h3 className="card-title pricing-card-title">{`${props.minTemp}°C/${props.maxTemp}°C`}</h3> : null}
            </div>
        </div>
    )
}

export default Icon;