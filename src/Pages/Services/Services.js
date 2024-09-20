import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import ServiceCard from "./ServiceCard";
import { services } from "../../data";

const Services = () => {
  return (
    <Container sx={{ mt: 3, textAlign: "center" }}>
      <Typography variant="h3">
        <span style={{ color: "#FF5722" }}>Our</span> Services
      </Typography>
      <Grid container mt={1} spacing={3} justifyContent="center">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </Grid>
    </Container>
  );
};

export default Services;
