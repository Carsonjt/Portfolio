"use client";

import AboutMe from "@/sections/AboutMe";
import Education from "@/sections/Education";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import WorkExperience from "@/sections/WorkExperience";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <AboutMe />
      <Skills />
      <WorkExperience />
      <Education />
      {/*
      <Projects />
      */}
      <Footer />
    </div>
  );
}
