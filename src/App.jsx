import { useEffect } from "react";
import Lenis from "lenis";

import Navbar from "./components/layout/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";
import Education from "./sections/Education/Education";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Certifications from "./sections/Certifications/Certifications";
import Resume from "./sections/Resume/Resume";
import Contact from "./sections/Contact/Contact";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      smoothWheel: true,
      lerp: 0.08,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      {/* 01 — Data Analyst Introduction */}
      <Navbar />
      <Hero />

      {/* 02 — About */}
      <About />

      {/* 03 — Experience */}
      <Experience />

      {/* 04 — Education */}
      <Education />

      {/* 05 — Skills */}
      <Skills />

      {/* 06 — Selected Work */}
      <Projects />

      {/* 08 — Certifications */}
      <Certifications />

      {/* 09 — Resume */}
      <Resume />

      {/* 10 — Contact */}
      <Contact />
    </main>
  );
}

export default App;
