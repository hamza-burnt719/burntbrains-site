import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { scroller } from "react-scroll";
import Logo from "../../Assets/logo.png";

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
  const handleScrollTo = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <AppBar
      position="static"
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
            style={{ width: "150px" }}
            onClick={() => handleScrollTo("homepage")}
          />
        </div>
        <div style={{ flexGrow: 1 }}>
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
  );
};

export default Header;
