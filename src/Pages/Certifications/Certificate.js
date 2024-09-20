import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";

const Certificate = (props) => {
  const { certificate } = props;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={2}
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ margin: "auto" }}>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            backgroundColor: "transparent",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={certificate.logo}
            alt={certificate.name}
            style={{
              width: "80%",
              height: "auto",
            }}
          />
        </Card>
      </div>
    </Grid>
  );
};

export default Certificate;
