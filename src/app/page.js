"use client";

import AboutMe from "@/components/home/AboutMe";
import Education from "@/components/home/Education";
import Header from "@/components/home/Header";
import Socials from "@/components/home/Socials";
import Technologies from "@/components/home/Technologies";
import WorkExperience from "@/components/home/workexperience/WorkExperience";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  console.log(1 + "1" - 1);
  return (
    <div className="bg-orange-50">
      {/* HEADING BAR */}
      <div className="bg-white">
        <Header />
      </div>

      {/* MAIN PAGE */}
      <div className="pt-10 mx-auto lg:max-w-screen-xl flex flex-row gap-x-4">
        {/* Left Column*/}
        <div className="basis-3/4">
          <AboutMe />
        </div>

        {/* Right Column*/}
        <div className="basis-1/4">
          <Education />
        </div>
      </div>
      {/* TECHNOLOGIES */}
      <div className="pt-10 mx-auto lg:max-w-screen-xl">
        <Technologies />
        <WorkExperience />
      </div>
    </div>
  );
}
