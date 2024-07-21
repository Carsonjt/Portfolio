"use client";

import AboutMe from "@/sections/AboutMe";
import Education from "@/sections/Education";
import Header from "@/sections/Header";
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
    </div>
  );
}
