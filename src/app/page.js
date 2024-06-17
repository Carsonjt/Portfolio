"use client";

import Checkmark from "@/components/generic/Checkmark";
import Header from "@/components/home/Header";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const frontend = ["HTML", "CSS"];
  return (
    <div className="bg-neutral-200">
      {/* HEADING BAR */}
      <div className="bg-purple-600">
        <Header />
      </div>

      {/* MAIN PAGE */}
      <div className="pt-10 mx-auto max-w-7xl flex flex-row gap-x-4">
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
        <div className="basis-1/4 border border-transparent rounded-lg p-3 border-purple-600 bg-neutral-50">
          <div>
            <div className="text-2xl pb-5">Familiar Technologies</div>
            <div className="text-xl">Frontend Development</div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              HTML
            </div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              CSS
            </div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              React / NextJS
            </div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              JavaScript
            </div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              Redux
            </div>
            <div className="flex items-center">
              <Checkmark style={"size-5 text-green-600"} />
              Tailwind / Bootstrap
            </div>
          </div>
          <div className="text-xl pt-5">Backend Development</div>
          <div className="flex items-center">
            <Checkmark style={"size-5 text-green-600"} />
            Java
          </div>
          <div className="flex items-center">
            <Checkmark style={"size-5 text-green-600"} />
            Kotlin
          </div>
          <div className="flex items-center">
            <Checkmark style={"size-5 text-green-600"} />
            Python
          </div>
          <div className="flex items-center">
            <Checkmark style={"size-5 text-green-600"} />
            Springboot
          </div>
          <div className="flex items-center">
            <Checkmark style={"size-5 text-green-600"} />
            Postgres / SQL
          </div>
        </div>
      </div>

      {/* PLACEHOLDER STUFF */}
      <main className="mx-auto flex min-h-screen flex-col items-center justify-between p-3">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Front-end Development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
              Learn more about the skills, technologies and experience of my
              front-end development.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Backend Development{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about the skills, technologies and experience of my
              back-end development.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
