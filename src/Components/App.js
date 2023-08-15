import React from "react";
import { useState } from "react";
import Header from "./Header";
import Search from "./Search";
import Weather from "./Weather";
import countryList from "../countryCodes";
import Footer from "./Footer";

function App() {

  const [isQueried, setIsQueried] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState({});

  function addLocation(locationInfo) {
    if (locationInfo) {
      if (countryList.hasOwnProperty(locationInfo.country)) {
        locationInfo.countryCode = countryList[locationInfo.country];
      }
      setLocation(locationInfo);
      const geocodeUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${locationInfo.name},${locationInfo.countryCode}&limit=1&appid=${process.env.REACT_APP_API_KEY}`;
      fetch(geocodeUrl).then((response) => response.json()).then((data) => {
        const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`;
        fetch(url).then((response) => response.json()).then((data) => {
          setWeatherData(data);
          setIsQueried(true);
        }).catch((error) => {
          console.log(error.message);
        })
      }).catch((error) => {
        console.log(error.message);
      })
    }
  }


  return (
    <div className="App">
      <Header queried={isQueried} onSearch={addLocation} />
      {!isQueried ? <Search type="home" onAdd={addLocation} /> : <Weather data={weatherData} location={location} />}
      <Footer queried={isQueried} />
    </div>
  );
}

export default App;
