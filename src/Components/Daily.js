import React from "react";
import Icon from "./Icon";
import { Carousel } from "react-bootstrap";

function Daily() {
    return (
        <div className="daily">
        <h2>Daily 8-days forecast</h2>
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

export default Daily;