import React from "react";
import AboutMe from "../components/AboutMe";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

function HomePage() {
  return (
    <div>
      <AboutMe />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default HomePage;
