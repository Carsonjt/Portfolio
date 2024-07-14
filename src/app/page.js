"use client";

import AboutMe from "@/components/home/AboutMe";
import Education from "@/components/home/Education";
import Header from "@/components/home/Header";
import Socials from "@/components/home/Socials";
import Technologies from "@/components/home/Technologies";
import WorkExperience from "@/components/home/workexperience/WorkExperience";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="">
      <Header />

      <AboutMe />
      <Technologies />
      <WorkExperience />
    </div>
  );
}
