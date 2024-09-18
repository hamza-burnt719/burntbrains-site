import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const TeamMember = ({ image, name, position }) => {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          backgroundColor: "transparent",
          color: "#fff",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt={name}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px 10px 50px 10px",
            marginBottom: "10px",
          }}
        />
        <CardContent>
          <Typography variant="h6">
            <b>{name}</b>
          </Typography>
          <Typography variant="subtitle2">
            <b>{position}</b>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamMember;
