import React from "react";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const TeamMember = (props) => {
  const { team } = props;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
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
          image={team.image}
          alt={team.name}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "10px 10px 50px 10px",
            marginBottom: "10px",
            transition: "transform 0.3s ease-in-out",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        <CardContent>
          <Typography variant="h6">
            <b>{team.name}</b>
          </Typography>
          <Typography variant="subtitle2">{team.position}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamMember;
