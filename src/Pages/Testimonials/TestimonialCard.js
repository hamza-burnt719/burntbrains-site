import React from "react";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TeamMember = (props) => {
  const { testimonial } = props;
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
          margin: "1rem",
          height: "40vh",
          padding: "20px",
          width: "300px",
          minHeight: "100%",
          borderRadius: "10px 10px 50px 10px",
          backgroundColor: "#fff",
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            src={testimonial.image}
            alt={testimonial.name}
            sx={{
              width: 75,
              height: 75,
              border: "4px solid white",
              transition: "all 500ms ease-out",
              "&:hover": {
                transform: "translateY(-5px)",
                borderColor: "#FF5722",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              p: 1,
            }}
          >
            <Typography variant="h6" fontWeight="bold">
              {testimonial.name}
            </Typography>
            <Typography variant="body2">{testimonial.title}</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "5px",
              }}
            >
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} sx={{ fontSize: "18px", color: "#FFC107" }} />
              ))}
            </Box>
          </Box>
        </Box>
        <CardContent>
          <Typography
            variant="body1"
            sx={{
              fontStyle: "italic",
              fontFamily: "inherit",
            }}
          >
            <FormatQuoteIcon sx={{ color: "#FF5722", fontSize: "22px" }} />
            {testimonial.testimonial}
            <FormatQuoteIcon sx={{ color: "#FF5722", fontSize: "22px" }} />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeamMember;
