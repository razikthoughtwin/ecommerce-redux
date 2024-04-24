import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/banner1.jpeg";
import banner2 from "../assets/banner2.jpeg";
import banner3 from "../assets/banner3.jpeg";

class Banner extends Component {
  render() {
    return (
      <div className="banner-container">
        <Carousel
          width="65vw"
          autoPlay
          useKeyboardArrows="true"
          dynamicHeight={true}
          centerMode
          infiniteLoop
          centerSlidePercentage={85}
        >
          <div>
            <img src={banner1} alt="crousal" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={banner2} alt="crousal" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={banner3} alt="crousal" />
            <p className="legend"></p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Banner;
