import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Carousel from 'react-bootstrap/Carousel';

function Hourly(props) {

  //Makes array of carousel items, 6 icons per item, so it needs 8 items for 48 icons
  const [carouselItems, setCarouselItems] = useState(Array(8).fill(null));

  useEffect(() => {
    let hourlyData = props.hourly;
    let iconItems = hourlyData.map((hour, index) => {
      let time = new Date(hour.dt * 1000);
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let day = days[time.getDay()];
      let hours = "0" + time.getHours();
      let minutes = "0" + time.getMinutes();
      let displayTime = hours.substring(hours.length - 2, hours.length) + ":" + minutes.substring(minutes.length - 2, minutes.length);
      let temperature = Math.round(hour.temp);
      let weatherIcon = hour.weather[0].icon;
      return <Icon key={index} id={index} type="hourly" day={day} time={displayTime} temp={temperature} weatherIcon={weatherIcon} />
    });

    let itemsPerSlide = 6;
    let numberOfSlides = iconItems.length / itemsPerSlide;
    let carousel = [];
    for (let i = 0; i < numberOfSlides; i++) {
      carousel.push(iconItems.splice(0, 6));
    }
    carousel = carousel.map((carouselItem, index) => {
      return (
        <Carousel.Item key={index}>
          {carouselItem.map((icon) => {
            return (
              <div className="inline-icon">
                {icon}
              </div>
            )
          })}
        </Carousel.Item>
      )
    })

    setCarouselItems(carousel);
  }, [props.hourly])

  return (
    <div id="hourly" className="hourly text-light text-center">
      <h2>Hourly 2-day forecast</h2>
      <Carousel bsPrefix="carousel" data-bs-theme="dark" indicators={false} interval={null} wrap={false}>

        {carouselItems}
      </Carousel>
    </div>
  )
}

export default Hourly;