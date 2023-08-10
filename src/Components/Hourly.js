import React from "react";
import Icon from "./Icon";
import Carousel from 'react-bootstrap/Carousel';

function Hourly() {
    return (
        <div className="hourly">
            <h2>Hourly 2-day forecast</h2>
        <Carousel data-bs-theme="dark" indicators={false} interval={null}>
        <Carousel.Item>
        <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
          <div className="inline-icon">
            <Icon />
          </div>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}

export default Hourly;