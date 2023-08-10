import React from "react";
import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";

function App() {

  const [isQueried, setIsQueried] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleClick() {
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=44.787197&lon=20.457273&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
    fetch(url).then((response) => response.json()).then((data) => {
      console.log(data);
      setWeatherData(data);
      setIsQueried(true);
    }).catch((error) => {
      console.log(error.message);
    })
  }

  return (
    <div className="App">
      <Header queried={isQueried} />
      <button onClick={handleClick}>Click Me</button>
      {!isQueried ? <Search /> : <Weather data={weatherData} />}
    </div>
  );
}

export default App;
