import React from "react";
import { Grid, Typography, Container } from "@mui/material";
import TeamMember from "../Team/TeamMember";
import { teamData } from "../../data";

const Team = () => {
  return (
    <Container sx={{ mt: 2, textAlign: "center" }}>
      <Typography variant="h3">
        <span style={{ color: "#FF5722", fontWeight: "bold" }}>Team</span>{" "}
        Members
      </Typography>
      <Grid container mt={1} spacing={3} justifyContent="center">
        {teamData.map((member, index) => (
          <TeamMember key={index} team={member} />
        ))}
      </Grid>
    </Container>
  );
};

export default Team;
