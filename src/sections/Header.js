"use client";

import linkedin from "../static/img/header/linkedin.png";
import github from "../static/img/header/github.png";
import Image from "next/image";
import Link from "next/link";
import Location from "@/components/header/Location";

export default function Header() {
  return (
    <section id="header">
      <div className="mx-auto p-5 lg:mx-20 md:mx-10 sm:mx-3 text-black-400 sticky top-0 z-50">
        <div class="lg:flex lg:items-center lg:justify-between">
          {/* LEFT SIDE - NAME, ROLE, LOCATION */}

          {/* NAME */}
          <div className="lg:flex tracking-tight">
            <div className="items-center pr-10 font-bold leading-7 text-3xl">
              <span className="text-black">{"{ "}</span>
              <span className="text-indigo-400">Portfolio V2</span>
              <span className="text-black">{" }"}</span>
            </div>

            <Location />
          </div>

          <div class="mt-5 flex items-center lg:ml-4 lg:mt-0">
            <Link
              href="#about-me"
              className="font-semibold mx-5 hover:text-green-400 hover:underline"
            >
              About Me
            </Link>
            <Link href="#skills" className="font-semibold mx-5">
              Skills
            </Link>
            <Link href="#work-experience" className="font-semibold mx-5">
              Work Experience
            </Link>
            <span class="ml-10 hidden sm:block">
              <Link href={"https://www.linkedin.com/in/carsonjtodd/"}>
                <Image
                  src={linkedin} // Path to your image
                  alt="LinkedIn"
                  width={36} // Desired width of the image
                  height={36} // Desired height of the image
                  className="mr-2"
                />
              </Link>
            </span>
            <span class="ml-3 hidden sm:block">
              <Link href={"https://github.com/Carsonjt"}>
                <Image
                  src={github} // Path to your image
                  alt="Github"
                  width={36} // Desired width of the image
                  height={36} // Desired height of the image
                  className="mr-2"
                />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
