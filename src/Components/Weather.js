import React from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

function Weather(props) {
    return (
        <div className="weather-report text-light">
            <h1 className="location text-center">{props.location.name}, {props.location.country}</h1>
            <Current current={props.data.current} />
            <Hourly hourly={props.data.hourly}/>
            <Daily daily={props.data.daily} />
        </div>
    )
}

export default Weather;