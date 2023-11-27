// src/components/ReviewSlider.js

import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import React from "react";
import Reviews from "./Reviews";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2, // Display one card at a time on larger screens
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1, // Display one card at a time on tablets
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1, // Display one card at a time on mobile devices
  },
};

const ReviewSlider = ({ reviewsData }) => {
  return (
    <Carousel responsive={responsive}>
      <Reviews reviewsData={reviewsData} />
    </Carousel>
  );
};

export default ReviewSlider;
