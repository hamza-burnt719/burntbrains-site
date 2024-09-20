import React from "react";
import { Grid, Typography, IconButton, Link, Box } from "@mui/material";
import { Instagram, WhatsApp, LinkedIn } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#0b0c10",
        color: "white",
        padding: "30px 20px",
        mt: "auto",
      }}
    >
      <Grid container px="10%" justifyContent="center" spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#FF5722" }}>Burnt</span> Brains
          </Typography>
          <Typography variant="body2" sx={{ mt: 1, maxWidth: "90%" }}>
            We Support Business Growth Using the Latest Technologies. Our
            Expertise Includes Salesforce, Ruby on Rails (RoR), MERN Stack,
            HubSpot, Zoho, and Graphic Design.
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6">
              <span style={{ color: "#FF5722" }}>Follow</span> Us
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 1 }}>
              <IconButton
                sx={{ color: "white" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/burnt-brains",
                    "_blank"
                  )
                }
              >
                <LinkedIn />
              </IconButton>
              <IconButton
                sx={{ color: "white" }}
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/burnt.brains",
                    "_blank"
                  )
                }
              >
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: "white" }}>
                <WhatsApp />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ color: "#FF5722" }}>Contact</span> Us
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <LocationOnIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#FF5722" }}
            />
            4th floor, Building # 171, Sector C, CCA-1 Phase 6 DHA, Lahore,
            54000, Pakistan
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            <Link
              href="#"
              sx={{
                color: "white",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline", color: "#FF5722" },
              }}
            >
              Get Directions
            </Link>
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <PhoneIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#FF5722" }}
            />
            +92 306 0739353
          </Typography>
          <Typography variant="body2" sx={{ mt: 2 }}>
            <EmailIcon
              sx={{ verticalAlign: "middle", mr: 1, color: "#FF5722" }}
            />
            hr@burntbrains.com
          </Typography>
        </Grid>
      </Grid>

      <Grid container px="10%" pt={3} justifyContent="center" spacing={5}>
        <Grid item xs={12} md={6}>
          <Typography variant="body2" fontWeight="bold">
            <span style={{ color: "#FF5722" }}>Burnt Brains © 2022</span> -
            Designed by BurntBrains
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Link
            href="#"
            sx={{
              color: "white",
              mr: 2,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            sx={{
              color: "white",
              mr: 2,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Terms & Conditions
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
