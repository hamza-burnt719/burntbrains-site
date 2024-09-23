import React from "react";
import { Grid, Typography, Button, Container, Box } from "@mui/material";
import { scroller } from "react-scroll";
import image from "../../Assets/box3.png";
import Header from "../Header/Header";
import TeamMember from "../Team/TeamMember";
import hamzaAlvi from "../../Assets/hamza_alvi.png";
import hasanAlvi from "../../Assets/hasan_alvi.png";

const HomePage = () => {
  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  const teamMembers = [
    {
      image: hasanAlvi,
      name: "Muhammad Hasan Alvi",
      position: "Co-Founder",
    },
    {
      image: hamzaAlvi,
      name: "Muhammad Hamza Alvi",
      position: "Co-Founder",
    },
  ];
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          filter: "blur(3px)",
          zIndex: -1,
          height: "79vh",
          width: "100%",
        }}
      ></div>
      <div
        style={{
          position: "relative",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        <Header sx={{ backgroundColor: "transparent" }} />
        <Box
          style={{
            height: "75vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
          }}
        >
          <Container>
            <Typography variant="h3">
              <b>
                <span style={{ color: "#FF5722" }}>Burnt</span> Brains
              </b>
            </Typography>
            <Typography
              variant="h5"
              style={{ color: "white", marginTop: "10px" }}
            >
              <b>
                <span style={{ color: "#FF5722" }}>Tailoring</span> Your
                Software Needs With{" "}
                <span style={{ color: "#FF5722" }}>Brilliant</span> Brains
              </b>
            </Typography>
            <Typography
              variant="subtitle1"
              style={{ color: "white", marginTop: "10px" }}
            >
              Top Web & Applications Solutions
            </Typography>
            <Button
              variant="outlined"
              onClick={() => handleScrollTo("services")}
              sx={{
                padding: "0.75rem 2rem",
                marginTop: "30px",
                color: "#fff",
                borderRadius: "35px",
                border: "2px solid #fff",
                "&:hover": {
                  variant: "contained",
                  backgroundColor: "#FF5722",
                  color: "white",
                  border: "none",
                },
              }}
            >
              <b>Get Started</b>
            </Button>
          </Container>
        </Box>
        <div className="waves-wrapper">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
              ></path>
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x="98"
                y="3"
                fill="rgba(5, 5, 5, 0.8)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="40"
                y="3"
                fill="rgba(5, 5, 5, 0.8)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="75"
                y="5"
                fill="rgba(5, 5, 5, 0.8)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="49"
                y="10"
                fill="rgba(5, 5, 5, 0.8)"
              />
            </g>
          </svg>
        </div>
      </div>
      <Container sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="h3">
          <span style={{ color: "#FF5722", fontWeight: "bold" }}>Co</span>
          Founders
        </Typography>
        <Grid container mt={1} spacing={3} justifyContent="center">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} team={member} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default HomePage;
