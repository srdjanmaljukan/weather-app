import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import Carousel from 'react-bootstrap/Carousel';
import { CarouselItem } from "react-bootstrap";

function Hourly(props) {

  //Makes array of carousel items, 6 icons per item, so it needs 8 items for 48 icons
  const [carouselItems, setCarouselItems] = useState(Array(8).fill(null));

  useEffect(() => {
    let hourlyData = props.hourly;
    let iconItems = hourlyData.map((hour, index) => {
      let time = new Date(hour.dt * 1000);
      let hours = "0" + time.getHours();
      let minutes = "0" + time.getMinutes();
      let displayTime = hours.substring(hours.length - 2, hours.length) + ":" + minutes.substring(minutes.length - 2, minutes.length);
      let temperature = Math.round(hour.temp);
      let weatherIcon = hour.weather[0].icon;
      return <Icon key={index} id={index} time={displayTime} temp={temperature} weatherIcon={weatherIcon} />
    });

    let itemsPerSlide = 6;
    let numberOfSlides = iconItems.length / itemsPerSlide;
    let carousel = [];
    for (let i = 0; i < numberOfSlides; i++) {
      carousel.push(iconItems.splice(0, 6));
    }

    carousel = carousel.map((carouselItem) => {
      return (
        <CarouselItem>
          {carouselItem.map((icon) => {
            return (
              <div className="inline-icon">
                {icon}
              </div>
            )
          })}
        </CarouselItem>
      )
    })

    setCarouselItems(carousel);
  }, [])

  return (
    <div className="hourly">
      <h2>Hourly 2-day forecast</h2>
      <Carousel data-bs-theme="dark" indicators={false} interval={null}>

        {carouselItems}
      </Carousel>
    </div>
  )
}

export default Hourly;