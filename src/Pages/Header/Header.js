import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
} from "@mui/material";
import { scroller } from "react-scroll";
import Logo from "../../Assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";

const buttonStyle = {
  position: "relative",
  overflow: "hidden",
  fontWeight: "500",
  marginRight: "5px",
  "&::before": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "0%",
    height: "3px",
    backgroundColor: "#FF5722",
    transition: "width 0.3s ease-in-out",
    zIndex: -1,
  },
  "&:hover::before": {
    width: "100%",
  },
  "&:hover": {
    borderRadius: 0,
  },
};

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:940px)");

  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <>
      {!isSmallScreen ? (
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            marginTop: "5px",
          }}
        >
          <Toolbar>
            <div style={{ flexGrow: 1 }}>
              <img
                src={Logo}
                alt="Burnt Brains"
                style={{ width: "150px", cursor: "pointer" }}
                onClick={() => handleScrollTo("homepage")}
              />
            </div>
            <div style={{ display: "flex", flexGrow: 1 }}>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("homepage")}
              >
                Home
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("services")}
              >
                Services
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("projects")}
              >
                Projects
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("testimonials")}
              >
                Testimonials
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("team")}
              >
                Our Team
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("clients")}
              >
                Our Clients
              </Button>
              <Button
                color="inherit"
                sx={buttonStyle}
                onClick={() => handleScrollTo("contact")}
              >
                Contact Us
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <AppBar
          position="fixed"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            marginTop: "5px",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ flexGrow: 1 }}>
              <img
                src={Logo}
                alt="Burnt Brains"
                style={{ width: "150px", cursor: "pointer" }}
                onClick={() => handleScrollTo("homepage")}
              />
            </div>
            <IconButton
              color="inherit"
              onClick={toggleDrawer(true)}
              sx={{ display: { xs: "block", md: "block" } }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </AppBar>
      )}

      <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div style={{ flexGrow: 1, backgroundColor: "#28282B" }}>
          <img
            src={Logo}
            alt="Burnt Brains"
            style={{ width: "150px", paddingLeft: "1rem", cursor: "pointer" }}
            onClick={() => handleScrollTo("homepage")}
          />
        </div>
        <List sx={{ backgroundColor: "#28282B", color: "#fff" }}>
          {[
            "homepage",
            "services",
            "projects",
            "testimonials",
            "team",
            "clients",
            "contact",
          ].map((text) => (
            <ListItem button key={text} onClick={() => handleScrollTo(text)}>
              <Button color="inherit" sx={buttonStyle}>
                {text.charAt(0).toUpperCase() + text.slice(1)}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
