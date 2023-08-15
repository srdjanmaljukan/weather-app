import React, {useState, useEffect} from "react";
import Icon from "./Icon";
import { Carousel } from "react-bootstrap";

function Daily(props) {

    //Makes array of carousel items, 4 icons per item, so it needs 2 items for 8 icons
    const [carouselItems, setCarouselItems] = useState(Array(2).fill(null));

    useEffect(() => {
      const dailyData = props.daily;
      const iconItems = dailyData.map((day, index) => {
        const time = new Date(day.dt * 1000);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayOfWeek = days[time.getDay()];
        const options = {month: 'short', day: 'numeric' };
        const date = time.toLocaleDateString("en-GB", options);
        const temperature = Math.round(day.temp.day);
        const tempMin = Math.round(day.temp.min);
        const tempMax = Math.round(day.temp.max);
        const weatherIcon = day.weather[0].icon;
        return <Icon key={index} id={index} type="daily" day={dayOfWeek} date={date} temp={temperature} minTemp={tempMin} maxTemp={tempMax} weatherIcon={weatherIcon} />
      });
  
      let itemsPerSlide = 4;
      let numberOfSlides = iconItems.length / itemsPerSlide;
      let carousel = [];
      for (let i = 0; i < numberOfSlides; i++) {
        carousel.push(iconItems.splice(0, itemsPerSlide));
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
    }, [props.daily])

  return (
    <div id="daily" className="daily text-center">
      <h2>Daily 8-day forecast</h2>
      <Carousel data-bs-theme="dark" indicators={false} interval={null} wrap={false}>
        {carouselItems}
      </Carousel>
    </div>
  )
}

export default Daily;