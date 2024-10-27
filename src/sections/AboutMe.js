import lang from "@/static/lang.json";

import Image from "next/image";

import SoftwareVector from "../static/img/about/SoftwareVector.png";

export default function AboutMe() {
  return (
    <section id="about">
      <div className="bg-sky-100 lg:px-32 md:px-20 px-10 md:py-10 py-5 flex flex-col-reverse lg:flex-row items-center text-center lg:text-left">
        <div className="w-full lg:w-3/5 inline-block my-auto">
          <p className="mb-3 text-5xl lg:text-6xl font-bold">
            {lang.section.about.title}
          </p>
          <p className="mb-5 text-4xl lg:text-5xl font-semibold">
            {lang.section.about.subtitle}
          </p>
          <p className="text-lg font-mono">{lang.section.about.description}</p>
        </div>
        <div className="w-full lg:w-2/5 inline-block">
          <Image
            alt="Software Vector"
            src={SoftwareVector}
            height={475}
            width={475}
            className="p-5 mx-auto"
          ></Image>
        </div>
      </div>
    </section>
  );
}
