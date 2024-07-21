import Image from "next/image";
import Link from "next/link";

import linkedin from "../../static/img/header/linkedin.png";
import github from "../../static/img/header/github.png";

export default function DesktopHeader() {
  return (
    <>
      <div className="mx-auto mx-3 lg:mx-5 p-5 text-black-400">
        <div className="lg:flex lg:items-center lg:justify-between">
          {/* LEFT SIDE - NAME, ROLE, LOCATION */}

          {/* NAME */}
          <div className="lg:flex tracking-tight">
            <div className="items-center pr-10 font-bold leading-7 text-3xl">
              <span className="text-black">{"{ "}</span>
              <span className="text-indigo-400">Portfolio V2</span>
              <span className="text-black">{" }"}</span>
            </div>
          </div>

          <div className="mt-5 flex items-center lg:ml-4 lg:mt-0">
            <Link
              href="#about-me"
              className="font-semibold mx-5 hover:text-green-400 hover:underline"
            >
              About
            </Link>
            <Link href="#skills" className="font-semibold mx-5">
              Skills
            </Link>
            <Link href="#work-experience" className="font-semibold mx-5">
              Experience
            </Link>
            <Link href="#education" className="font-semibold mx-5">
              Education
            </Link>
            <Link href="#projects" className="font-semibold mx-5">
              Projects
            </Link>
            <span className="ml-10 hidden sm:block">
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
            <span className="ml-3 hidden sm:block">
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
    </>
  );
}
