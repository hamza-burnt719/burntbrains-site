import React from "react";
import { Typography, Container } from "@mui/material";
import Slider from "react-slick";
import Certificate from "./Certificate";
import { certifications } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certifications = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container sx={{ mt: 3, textAlign: "center" }}>
      <Typography variant="h3" mb={2}>
        <span style={{ color: "#FF5722", fontWeight: "bold" }}>Our</span>{" "}
        Certifications
      </Typography>
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {certifications.map((certificate, index) => (
            <div key={index}>
              <Certificate certificate={certificate} />
            </div>
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

export default Certifications;
