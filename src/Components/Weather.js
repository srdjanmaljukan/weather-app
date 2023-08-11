import React from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

function Weather(props) {
    return (
        <div>
            <Current current={props.data.current} />
            <Hourly hourly={props.data.hourly}/>
            <Daily />
        </div>
    )
}

export default Weather;