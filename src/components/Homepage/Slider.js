import "react-multi-carousel/lib/styles.css";

import Carousel from "react-multi-carousel";
import React from "react";
import img1 from "../../assets/img_1.png";
import img2 from "../../assets/img_2.jpg";
import img3 from "../../assets/img_3.jpg";
import img4 from "../../assets/img_4.png";
import img5 from "../../assets/img_5.png";
import img6 from "../../assets/img_6.jpg";
import { styled } from "@mui/material";

const image = [img1, img2, img3, img4, img5, img6];

const Image = styled("img")({
  height: "80%",
  width: "100%",
});

const CustomDotList = styled("ul")({
  position: "absolute",
  top: "20px", // Adjust this value to your desired position
  left: "50%",
  transform: "translateX(-50%)",
  listStyle: "none",
  padding: 0,
  margin: 0,
  textAlign: "center",
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Slider = () => {
  return (
    <Carousel
      infinite={true}
      autoPlay={true}
      showDots={true}
      autoPlaySpeed={2000}
      responsive={responsive}
      swipeable={false}
      draggable={false}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      customDotList={<CustomDotList />}
    >
      {image.map((data, key) => (
        <Image src={data} alt="slider" key={key} />
      ))}
    </Carousel>
  );
};

export default Slider;
