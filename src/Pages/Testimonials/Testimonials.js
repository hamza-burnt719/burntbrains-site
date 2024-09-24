import React from "react";
import { Typography, Container } from "@mui/material";
import Slider from "react-slick";
import { testimonials } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ mt: 2, textAlign: "center" }}>
      <Typography variant="h3" mb={3}>
        <span style={{ color: "#FF5722", fontWeight: "bold" }}>Client</span>{" "}
        Testimonials
      </Typography>
      <div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Slider>
        <style>
          {`
            .slick-prev,
            .slick-next {
              display: none !important;
            }
          `}
        </style>
      </div>
    </Container>
  );
};

export default Clients;
