import React, { useEffect, useState } from "react";

function Current(props) {

    const [date, setDate] = useState({});

    useEffect(() => {
        let currentDate = new Date(props.current.dt * 1000);
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let day = currentDate.getDate();
        let month = months[currentDate.getMonth()];
        let hour = currentDate.getHours();
        let minutes = currentDate.getMinutes();
        setDate((prev) => {
            return {
                ...prev,
                day: day,
                month: month,
                hour: hour,
                minutes: minutes

            }
        })
    }, [])

    return (
        <div className="current-weather">
            <div className="current-card card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                    <h4 className="my-0 fw-normal">{date.hour} : {date.minutes}</h4>
                    <h5 className="my-0 fw-normal">{date.day} {date.month}</h5>
                </div>
                <div className="card-body">
                    <img
                        src="https://openweathermap.org/img/wn/01n@2x.png"
                        alt="weather-icon"
                    />
                    <p>Clear sky</p>
                </div>
            </div>
        </div>

    )
}

export default Current;