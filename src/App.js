import React from "react";
import Homepage from "./Pages/Homepage/Homepage";
import Team from "./Pages/Team/Team";
import Services from './Pages/Services/Services'
import Testimonials from './Pages/Testimonials/Testimonials'
import Contact from './Pages/Contact/Contact'
import Projects from './Pages/Projects/Projects'
import Footer from './Pages/Footer/Footer'

const App = () => {
  return (
    <div>
      <Homepage />
      <Team />
      <Services/>
      <Testimonials/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
