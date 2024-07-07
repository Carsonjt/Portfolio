"use client";

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
          <div className="">
            <div className="m-0 p-1 bg-gray-700 flex rounded-t-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 bg-red-400 rounded-full border-black border"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="m-0 p-3 bg-gray-500 text-white font-mono tracking-tighter rounded-b-lg">
              <span className="text-green-500">{"$: /home > "}</span>
              <span> aboutme</span>
              <div>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    " Hello, I'm a passionate software developer currently based in Vancouver, Canada. I have been coding for over 6 years, with 2+ years of professional experience within the financial and oil and gas industries. I have experience working in both front-end and back-end technologies, though I have a preference for backend work. Explore my projects, experience and work history to learn more about me!",
                    1000,
                  ]}
                  wrapper="span"
                  speed={99}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column*/}
        <div className="basis-1/4">
          <Socials />
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
