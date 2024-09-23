import React from "react";
import { Typography, Container } from "@mui/material";
import Slider from "react-slick";
import Client from "./Client";
import { clients } from "../../data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <Container sx={{ mt: 2, textAlign: "center" }}>
      <Typography variant="h3">
        <span style={{ color: "#FF5722", fontWeight: "bold" }}>Our</span>{" "}
        Clients
      </Typography>
      <div style={{ position: "relative" }}>
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index}>
              <Client client={client} />
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

export default Clients;
