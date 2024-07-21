import Image from "next/image";
import Link from "next/link";

import linkedin from "../../static/img/header/linkedin.png";
import github from "../../static/img/header/github.png";

export default function MobileHeader() {
  return (
    <>
      <div className="mx-auto p-5 mx-1 text-black-400">
        <div className="flex justify-between">
          <div className="items-center pr-10 font-bold leading-7 text-3xl">
            <span className="text-black">{"{ "}</span>
            <span className="text-indigo-400">Portfolio V2</span>
            <span className="text-black">{" }"}</span>
          </div>
          <div className="flex">
            <Link href={"https://www.linkedin.com/in/carsonjtodd/"}>
              <Image
                src={linkedin} // Path to your image
                alt="LinkedIn"
                width={36} // Desired width of the image
                height={36} // Desired height of the image
                className="mx-5"
              />
            </Link>
            <Link href={"https://github.com/Carsonjt"}>
              <Image
                src={github} // Path to your image
                alt="Github"
                width={36} // Desired width of the image
                height={36} // Desired height of the image
                className="mx-2"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          <Link
            href="#about-me"
            className="font-semibold mx-5 my-1 hover:text-green-400 hover:underline"
          >
            About Me
          </Link>
          <Link
            href="#skills"
            className="font-semibold mx-5 my-1 hover:text-green-400 hover:underline"
          >
            Skills
          </Link>
          <Link
            href="#work-experience"
            className="font-semibold mx-5 my-1 hover:text-green-400 hover:underline"
          >
            Work Experience
          </Link>
          <Link
            href="#education"
            className="font-semibold mx-5 my-1 hover:text-green-400 hover:underline"
          >
            Education
          </Link>
          <Link
            href="#projects"
            className="font-semibold mx-5 my-1 hover:text-green-400 hover:underline"
          >
            Projects
          </Link>
        </div>
      </div>
    </>
  );
}
