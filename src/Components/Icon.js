import React from "react";

function Icon(props) {
    return (
        <div className={`${props.type === "hourly" ? "icon-card-narrow" : "icon-card-wide"} card mb-4 rounded-3 shadow-sm`}>
            {props.type === "hourly" ? <div className="card-header p-2">
                <h5 className="my-0 fw-bold text-light">{props.day}</h5>
                <h4 className="my-0 fw-bold text-light">{props.time}</h4>
            </div> : null}
            {props.type === "daily" ? <div className="card-header p-2">
                <h5 className="my-0 fw-bold text-light">{props.day}</h5>
                <h4 className="my-0 fw-bold text-light">{props.date}</h4>
            </div> : null}
            <div className="card-body p-0">
                <img src={`https://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} alt="weather-icon" className="weather-icon" />
            </div>
            <div className="card-body p-0">
                <h2 className="card-title pricing-card-title text-light">{props.temp}°C</h2>
                {props.type === "daily" ? <h4 className="card-title pricing-card-title text-light">{`${props.minTemp}°C/${props.maxTemp}°C`}</h4> : null}
            </div>
        </div>
    )
}

export default Icon;