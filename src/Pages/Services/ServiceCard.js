import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const ServiceCard = (props) => {
  const { service } = props;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          padding: 2,
          backgroundColor: "transparent",
          color: "#fff",
          borderRadius: "10px 10px 50px 10px",
          "&:hover": {
            backgroundColor: "#ff6a3c",
            color: "#fff",
          },
        }}
      >
        <CardMedia
          component="img"
          image={service.logo}
          alt={service.title}
          style={{
            borderRadius: "30px",
            width: "70%",
            height: "80%",
            marginBottom: "10px",
          }}
        />
        <CardContent>
          <Typography variant="h6">
            <b>{service.title}</b>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ServiceCard;
