import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Element } from "react-scroll";
import Homepage from "./Pages/Homepage/Homepage";
import Team from "./Pages/Team/Team";
import Services from "./Pages/Services/Services";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Contact from "./Pages/Contact/Contact";
import Clients from "./Pages/Clients/Clients";
import Footer from "./Pages/Footer/Footer";
import Certifications from "./Pages/Certifications/Certifications";

const App = () => {
  return (
    <Router>
      <div>
        <Element name="homepage" className="element">
          <Homepage />
        </Element>
        <Element name="services" className="element">
          <Services />
          <Certifications />
        </Element>
        <Element name="testimonials" className="element">
          <Testimonials />
        </Element>
        <Element name="team" className="element">
          <Team />
        </Element>
        <Element name="clients" className="element">
          <Clients />
        </Element>
        <Element name="contact" className="element">
          <Contact />
        </Element>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
